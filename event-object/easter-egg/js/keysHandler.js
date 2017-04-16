'use strict';
const navPanel = document.querySelector('nav');
const netologyArr = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
var eggArr = [];
//переключаем видимость панели навигации
function toggleNavPanel() {
  navPanel.classList.toggle('visible');
}
function collectEgg(newKey) {
  eggArr.push(newKey);
  for (let i = 0; i < eggArr.length; i++) {
    if (eggArr[i] != netologyArr[i]) {
      eggArr = [];
      break;
    }
  }
  //если собралось заветное слово
  if (eggArr.length == netologyArr.length) {
    eggArr = [];
    document.querySelector('div.secret').classList.add('visible');
  }
}
//анализируем клики по клавиатуре
function keyHandler(eo) {
  if (eo.repeat) {
    return;
  }
  if (eo.code == 'KeyT' && eo.ctrlKey && eo.altKey) {
    toggleNavPanel();
  }
  collectEgg(eo.code);
}
document.addEventListener('keydown', keyHandler);