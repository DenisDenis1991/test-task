window.addEventListener('DOMContentLoaded', () => {

  const formTable = document.querySelector('.form__wrapper');
  const addTableRowButton = document.querySelector('.button-add');
  const tableRow = document.getElementById('table-row').content;
  const form = document.querySelector('.form');

  addTableRowButton.addEventListener('click', () => {
    formTable.append(tableRow.cloneNode(true));
    const arrayBox = formTable.querySelectorAll('.form__box');
    for (let i = 1; i <= arrayBox.length - 1; i++) {
      arrayBox[i].setAttribute('data-number', i);
    }
    const arrBtn = formTable.querySelectorAll('.form__delete');
    for (let j = 1; j <= arrBtn.length - 1; j++) {
      arrBtn[j].setAttribute('data-btn', j);
    }
  });

  formTable.addEventListener('click', (evt) => {
    const currentButton = evt.target.dataset.btn;
    if (currentButton) {
      const currentDeleteButton = formTable.querySelector(`[data-number='${currentButton}']`);
      currentDeleteButton.remove();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(formDataObj, null, 2));
  });
});
