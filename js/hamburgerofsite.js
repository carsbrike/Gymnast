const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const essa = document.querySelector('.essa');
const korek = document.querySelector('.korek');
const menuUl = document.querySelector('.menu-ul');
const inBack = document.querySelector('.inner-background');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  inBack.classList.toggle('active');
  inBack.classList.remove('open');
  menuUl.classList.remove('open');
  korek.classList.remove('open');
});

essa.addEventListener('click', () => {
  korek.classList.toggle('open');
  menuUl.classList.toggle('open');
  inBack.classList.toggle('open');
  essa.classList.toggle('redact-on');
});