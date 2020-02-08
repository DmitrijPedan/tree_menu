[...document.querySelectorAll('ul.list-unstyled.main ul')].map(el => el.classList.add('close'));

const a = [...document.querySelectorAll('ul.list-unstyled.main a')];
const ul = [...document.querySelectorAll('ul.list-unstyled.main ul')];

const addSelectedClassToParents = (elem) => {
  while (elem.parentNode.parentNode.className == "") {
    elem = elem.parentNode.parentNode;
    elem.nextElementSibling.classList.add('selected');
  }
}

const addPath = (elem) => {
  document.getElementById('path').innerHTML = '';
  while (elem.parentNode.parentNode.nextElementSibling) {
    elem.classList == 'selected' ? document.getElementById('path').prepend(' / ',elem.textContent) : document.getElementById('path').innerHTML = '';
    elem = elem.parentNode.parentNode.nextElementSibling; 
  }
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
  addPath(event.target);
  ul.map(el => el.nextElementSibling.className == 'selected' ? el.classList.remove('close') : el.classList.add('close'));
}));

