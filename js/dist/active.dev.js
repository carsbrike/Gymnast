"use strict";

var btnContainer = document.getElementById("wps"); // Get all buttons with class="btn" inside the container

var btns = btnContainer.getElementsByClassName("btn"); // Loop through the buttons and add the active class to the current/clicked button

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function active() {
    var current = document.getElementsByClassName("on");
    current[0].className = current[0].className.replace(" on", "");
    this.className += " on";
  });
}