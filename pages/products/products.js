const ingredients = JSON.parse(localStorage.getItem('ingredients'));
const btnNext = document.querySelector('.button-next');
const btnAdd = document.querySelector('.button-submit');
const product = document.querySelector('.product-input');
const selectedProducts = [];

const sortedIngredients = [...ingredients].sort();
sortedIngredients.map((el) => {
  document.querySelector('.product-input').innerHTML += `<option value="${el}">${el}</option>`;
});

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  selectedProducts.push(ingredients.indexOf(product.value));
  document.querySelector('.selected-products').innerHTML += `<li>${product.value}</li>`;
  product.remove(product.selectedIndex);
});

btnNext.addEventListener('click', (e) => {
  localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  window.open('../categories/categories.html', '_self');
});
