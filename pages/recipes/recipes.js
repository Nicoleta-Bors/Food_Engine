const containerRecipes = document.querySelector('.container-recipes');

const allCategories = JSON.parse(localStorage.getItem('categories'));
const allTypes = JSON.parse(localStorage.getItem('types'));
const recipes = JSON.parse(localStorage.getItem('recipes'));

const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));
const selectedTypes = JSON.parse(localStorage.getItem('selectedTypes'));
const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

const categoriesText = (item) => {
  let showCategories = item.category
    .map((el) => `<p class="category">#${allCategories[el]}</p>`)
    .join('');
  showCategories += item.types.map((el) => `<p class="type">#${allTypes[el]}</p>`).join('');
  return showCategories;
};
//prettier-ignore
const ingredientsText = (item) => item.ingredientsText.split(',').map((el) => `<li>${el}</li>`).join('');
//prettier-ignore
const recipeText = (item) => item.recipe.split('\n').map((el) => `<li>${el}</li>`).join('');

const renderItem = (item) => {
  return `<div class="recipe-item">
<div class="recipe-title"><h2>${item.name}</h2></div>
<div class="recipe-categories">
  ${categoriesText(item)}
</div>
<div class="recipe-img">
  <img
    src="${item.imgUrl}"
    alt="${item.name}"
  />
</div>
<div class="recipe-ingredients">
  <ul>
    ${ingredientsText(item)}
  </ul>
</div>
<div class="recipe-text">
 <h3>Reteta:</h3>
  <ol>
    ${recipeText(item)}
  </ol>
</div>
</div`;
};

const afisareSorted = (arr) => {
  if (arr.length)
    for (let el of arr) {
      containerRecipes.innerHTML += renderItem(el.recipe);
    }
  else containerRecipes.innerHTML = `<h1>Sorry! Nu am găsit așa rețete 🙁 </h1>`;
};
//----------------- sortarea -----------------
const mergeSort = (arr, start, end) => {
  if (start < end) {
    let middle = parseInt((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);
    merge(arr, start, middle, end);
  }
  return arr;
};
const merge = (arr, start, middle, end) => {
  let nLeft = middle - start + 1; //pana la mijloc inlcusiv
  let nRight = end - middle; //dupa mijloc
  //prettier-ignore
  let leftArr = [], rightArr = [];
  for (let i = 0; i < nLeft; i++) leftArr[i] = arr[start + i];
  for (let j = 0; j < nRight; j++) rightArr[j] = arr[middle + 1 + j];
  //prettier-ignore
  let i = 0, j = 0, k = start;
  while (i < nLeft && j < nRight) {
    if (leftArr[i].raport > rightArr[j].raport) {
      arr[k] = leftArr[i];
      k++;
      i++;
    } else {
      arr[k] = rightArr[j];
      k++;
      j++;
    }
  }
  //daca mai avem elem. ramase
  while (i < nLeft) arr[k++] = leftArr[i++];
  while (j < nRight) arr[k++] = rightArr[j++];
};
//----------------- finisare sortare -----------------

//----------------- cautarea -----------------
let listOfRecipesByCategory = [];
let listOfRecipesByTypes = [];
let finalListOfRecipes = [];
//daca sunt categorii selectate:
if (selectedCategories.length) {
  for (const el of recipes)
    if (countSame(selectedCategories, el.category)) listOfRecipesByCategory.push(el);
} else {
  listOfRecipesByCategory = [...recipes];
}
//daca sunt tipuri selectate:
if (selectedTypes.length) {
  for (const el of listOfRecipesByCategory)
    if (countSame(selectedTypes, el.types)) listOfRecipesByTypes.push(el);
} else {
  listOfRecipesByTypes = [...listOfRecipesByCategory];
}
//daca sunt produse selectate
if (selectedProducts.length) {
  let count;
  for (const el of listOfRecipesByTypes) {
    count = countSame(selectedProducts, el.ingredients);
    if (count) finalListOfRecipes.push({ recipe: el, raport: count / el.ingredients.length });
  }
  if (finalListOfRecipes.length)
    afisareSorted(mergeSort(finalListOfRecipes, 0, finalListOfRecipes.length - 1));
} else {
  //afisarea
  if (listOfRecipesByTypes.length) {
    //alegerea unei retete random
    let random = Math.floor(Math.random() * listOfRecipesByTypes.length);
    // for (let el of listOfRecipesByTypes) containerRecipes.innerHTML += renderItem(el);
    containerRecipes.innerHTML = renderItem(listOfRecipesByTypes[random]);
  } else containerRecipes.innerHTML = `<h1>Sorry! Nu am găsit așa rețete 🙁 </h1>`;
}
//----------------- finisare cautarea -----------------
