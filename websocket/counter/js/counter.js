'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
const counterElem = document.getElementsByClassName('counter')[0];
const errorsElem = document.getElementsByClassName('errors')[0];
connection.addEventListener('message', event => {
      var message = JSON.parse(event.data);
      counterElem.innerText=message.connections;
      errorsElem.innerText=message.errors;
    });
window.addEventListener('beforeunload', () => {
  connection.close(1000);
});
