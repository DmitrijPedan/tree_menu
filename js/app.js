[...document.querySelectorAll('ul.list-unstyled.main ul')].map(el => el.classList.add('close'));
const a = [...document.querySelectorAll('ul.list-unstyled.main a')];
const ul = [...document.querySelectorAll('ul.list-unstyled.main ul')];

const addSelectedClassToParents = (elem) => {
  while (elem.parentNode.parentNode.className == "") {
    elem = elem.parentNode.parentNode;
    elem.nextElementSibling.classList.add('selected');
  }
}

const getPath = (elem) => {
  document.getElementById('pathOutput').innerHTML = '';
  while (elem.parentNode.parentNode.nextElementSibling) {
    elem.classList == 'selected' ? document.getElementById('pathOutput').prepend(' / ',elem.textContent) : document.getElementById('pathOutput').innerHTML = '';
    elem = elem.parentNode.parentNode.nextElementSibling; 
  }
}

const getContentOfCategory = (elem) => {
  document.getElementById('contentOutput').innerHTML = '';
  !elem.previousElementSibling && elem.classList.contains("selected") ? document.getElementById('contentOutput').append('Items of ',elem.textContent) : null;
}

a.map((el) => el.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected')
  } else {
    a.map(el => el.classList.remove('selected'));
    event.target.classList.add('selected')
  }
  addSelectedClassToParents(event.target);
  getPath(event.target);
  getContentOfCategory(event.target);
  ul.map(el => el.nextElementSibling.className == 'selected' ? el.classList.remove('close') : el.classList.add('close'));
}));