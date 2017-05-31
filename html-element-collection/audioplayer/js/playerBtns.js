'use strict';
const audios = ['mp3/LA Chill Tour.mp3', 'mp3/LA Fusion Jam.mp3', 'mp3/This is it band.mp3'];
let cur_song = 0;
const titleEL = document.getElementsByClassName('title')[0];
const player = document.getElementsByTagName('audio')[0];
const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
function setAudio() {
  if (titleEL) {
    titleEL.title = audios[cur_song].slice(4, -4);
  }
  if (player) {
    player.src = audios[cur_song];
    if (mediaplayer.classList.contains('play')) {
      player.play();
    }
  }
}
function next() {
  cur_song++;
  if (cur_song >= audios.length) {
    cur_song = 0;
  }
  setAudio();
}
function prev() {
  cur_song--;
  if (cur_song < 0) {
    cur_song = audios.length - 1;
  }
  setAudio();
}
function playPause() {
  if (mediaplayer.classList.contains('play')) {
    player.pause();
    mediaplayer.classList.remove('play');
  } else {
    player.play();
    mediaplayer.classList.add('play')
  }
}
function stop() {
  if (player) {
    mediaplayer.classList.remove('play');
    player.pause();
    player.currentTime = 0;
  }
}
const btnPlaystate = document.getElementsByClassName('playstate')[0];
if (btnPlaystate) {
  btnPlaystate.onclick = playPause;
}
const btnStop = document.getElementsByClassName('stop')[0];
if (btnStop) {
  btnStop.onclick = stop;
}
const btnNext = document.getElementsByClassName('next')[0];
if (btnNext) {
  btnNext.onclick = next;
}
const btnPrev = document.getElementsByClassName('back')[0];
if (btnPrev) {
  btnPrev.onclick = prev;
}