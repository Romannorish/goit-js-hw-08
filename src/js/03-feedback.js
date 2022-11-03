import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

populateInput();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// записується у локал сторедж {} з полями
function onFormInput(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// під час сабміту очищається локал і поля, і в консоль виодь {} з полями.
function onFormSubmit(e) {
  e.preventDefault();
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parseMessage = JSON.parse(savedMessage);

  if (parseMessage) {
    console.log(parseMessage);
  }

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// під час завантаження сторінки перевір стан локал ,якщо є дані заповни ними поля форми
function populateInput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parseMessage = JSON.parse(savedMessage);

  if (parseMessage) {
    formData = parseMessage || '';
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}
