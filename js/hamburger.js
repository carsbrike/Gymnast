const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const essa = document.querySelector('.essa');
const korek = document.querySelector('.korek');
const menuUl = document.querySelector('.menu-ul');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  content.classList.toggle('active');
  content.classList.remove('open');
  menuUl.classList.remove('open');
  korek.classList.remove('open');
});

essa.addEventListener('click', () => {
  korek.classList.toggle('open');
  content.classList.toggle('open');
  menuUl.classList.toggle('open');
  essa.classList.toggle('redact-on');
});