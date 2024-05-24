"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var menu = document.querySelector('.menu');
var essa = document.querySelector('.essa');
var korek = document.querySelector('.korek');
var menuUl = document.querySelector('.menu-ul');
var inBack = document.querySelector('.inner-background');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  inBack.classList.toggle('active');
  inBack.classList.remove('open');
  menuUl.classList.remove('open');
  korek.classList.remove('open');
});
essa.addEventListener('click', function () {
  korek.classList.toggle('open');
  menuUl.classList.toggle('open');
  inBack.classList.toggle('open');
  essa.classList.toggle('redact-on');
});