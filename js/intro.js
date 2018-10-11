const myForm = document.querySelector('form');

loadEventListeners();
// Events
function loadEventListeners() {
  myForm.addEventListener('submit',getFormInfo)
}

function getFormInfo(e) {
  e.preventDefault();
}