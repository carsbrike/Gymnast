"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var menu = document.querySelector('.menu');
var content = document.querySelector('.content');
var essa = document.querySelector('.essa');
var korek = document.querySelector('.korek');
var menuUl = document.querySelector('.menu-ul');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  content.classList.toggle('active');
  content.classList.remove('open');
  menuUl.classList.remove('open');
  korek.classList.remove('open');
});
essa.addEventListener('click', function () {
  korek.classList.toggle('open');
  content.classList.toggle('open');
  menuUl.classList.toggle('open');
  essa.classList.toggle('redact-on');
});