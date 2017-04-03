'use strict';
var index = 4,
  imgs = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png'];
function slideNext() {
  index++;
  if (index >= 5) {
    index = 0;
  }
  return imgs[index];
}
const sliderImg = document.getElementById('slider');
setInterval(function () {
  sliderImg.src = slideNext();
}, 5000);
