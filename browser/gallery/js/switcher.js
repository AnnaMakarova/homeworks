'use strict';
var index = 0,
  imgs = ['i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/IAC.jpg', 'i/new-museum.jpg'];
const currentImg = document.getElementById('currentPhoto');
//apply 1st pic instead of gif by default
currentImg.src = imgs[index];
//direction - use 1 to switch next, -1 to switch back
function switchImg(direction) {
  index += direction;
  if (index < 0) {
    index = 4;
  }
  if (index > 4) {
    index = 0;
  }
  currentImg.src = imgs[index];
}
function switchImgNext(){
  switchImg(1);
}
function switchImgBack(){
  switchImg(-1);
}
const nextBtn = document.getElementById('nextPhoto');
nextBtn.onclick = switchImgNext;
const prevBtn = document.getElementById('prevPhoto');
prevBtn.onclick = switchImgBack;