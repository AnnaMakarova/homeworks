'use strict';
//используемые элементы верстки
const keysList = document.querySelector('ul.set');
const keysItems = Array.from(keysList.getElementsByTagName('li'));
const soundSrcs = ['first', 'second', 'third', 'fourth', 'fifth'];
//переключение режима игры
function switchSound(soundName) {
  soundName = soundName.toLowerCase();
  var sounds = ['lower', 'higher', 'middle']
  var curSound = sounds.indexOf(soundName)
  if (curSound < 0) {
    return;
  }
  for (let i = 0; i < sounds.length; i++) {
    if (i == curSound) {
      keysList.classList.add(sounds[i]);
    } else {
      keysList.classList.remove(sounds[i]);
    }
  }
  for (let i = 0; i < keysItems.length; i++) {
    let audioEl = keysItems[i].getElementsByTagName('audio')[0];
    if (audioEl) {
      audioEl.setAttribute('src', 'sounds/' + sounds[curSound] + '/' + soundSrcs[i] + '.mp3');
    }
  }
}
//воспроизведение звука клавиши
function playSound() {
  let audioEl = this.getElementsByTagName('audio')[0];
  if (audioEl) {
    audioEl.play();
  }
}
//обработчик нажатия кнопки
function checkKeyDown(eo) {
  if (eo.repeat) {
    return;
  }
  switch (eo.key) {
    case 'Alt':
      switchSound('higher');
      break;
    case 'Shift':
      switchSound('lower');
      break;
  }
}
//обработчик отпускания кнопки - возвращаем middle
function checkKeyUp(eo) {
  if (['Shift', 'Alt'].indexOf(eo.key) >= 0) {
    switchSound('middle');
  }
}

//начальные звуки клавиш
switchSound('middle');
//навесим обработчики
for (let item of keysItems) {
  item.addEventListener('click', playSound);
}
document.addEventListener('keydown', checkKeyDown);
document.addEventListener('keyup', checkKeyUp);