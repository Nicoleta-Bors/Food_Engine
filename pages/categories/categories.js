const allCategories = JSON.parse(localStorage.getItem('categories'));
const allTypes = JSON.parse(localStorage.getItem('types'));

document.querySelector('.button-submit').addEventListener('click', (e) => {
  let checked = document.querySelectorAll('input:checked');
  checked = Array.prototype.slice.call(checked).map((el) => el.id);

  const selectedCategories = [],
    selectedTypes = [];

  checked.map((el) => {
    if (allCategories.includes(el)) {
      selectedCategories.push(allCategories.indexOf(el));
    } else {
      selectedTypes.push(allTypes.indexOf(el));
    }
  });

  localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  localStorage.setItem('selectedTypes', JSON.stringify(selectedTypes));
});
