window.addEventListener('DOMContentLoaded', () => {

  const formTable = document.querySelector('.form__wrapper');
  const tableRow = document.getElementById('table-row').content;
  const form = document.querySelector('.form');

  const buttonForm = (evt) => {
    if (evt.target.classList.contains('button-add')) {
      formTable.appendChild(tableRow.cloneNode(true));
    }
    if (evt.target.classList.contains('form__delete')) {
      evt.target.parentElement.remove();
    }
  };

  form.addEventListener('click', buttonForm);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(formDataObj, null, 2));
  });
});
