'use strict';
function toggleActive() {
  this.classList.toggle('active');
};

const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];
if (wrapperDropdown) {
  wrapperDropdown.onclick = toggleActive;
}