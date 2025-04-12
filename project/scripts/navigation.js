const menu = document.querySelector('#menu');
const naveElement = document.querySelector('#navLinks');
menu.addEventListener('click', () => {
  menu.classList.toggle('show');
  naveElement.classList.toggle('show');
});

const currentYear = document.getElementById('current-year');
const currentDate = new Date();
currentYear.textContent = currentDate.getFullYear();

const path = window.location.pathname.split('/').pop();
const links = document.querySelectorAll('#navLinks a');

links.forEach((link) => {
  if (link.getAttribute('href').includes(path)) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
