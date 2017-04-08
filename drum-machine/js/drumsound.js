'use strict';
function playDrum() {
  const audioEl = this.getElementsByTagName('audio')[0];
  if (audioEl) {
    audioEl.play();
  }
}

const drums = document.getElementsByClassName('drum-kit__drum');
for (const drumBtn of drums) {
  drumBtn.onclick = playDrum;
}
