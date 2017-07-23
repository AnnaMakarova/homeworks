'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

function sendClick(eo) {
  connection.send(JSON.stringify({'x':eo.clientX,'y':eo.clientY}));
}
showBubbles(connection);
document.addEventListener('click', sendClick);
