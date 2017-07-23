'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
const chatContainer = document.getElementsByClassName('chat')[0];
const msgBox = chatContainer.getElementsByClassName('message-box')[0];
const msgInput = chatContainer.getElementsByClassName('message-input')[0];
const msgSubmit = chatContainer.getElementsByClassName('message-submit')[0];
const msgContent = chatContainer.getElementsByClassName('messages-content')[0];
const msgTemplates = chatContainer.getElementsByClassName('messages-templates')[0];
const msgTpl = chatContainer.getElementsByClassName('message')[1];
const msgTplPersonal = chatContainer.getElementsByClassName('message-personal')[0];
const msgTplLoading = chatContainer.getElementsByClassName('loading')[0];
const msgTplStatus = chatContainer.getElementsByClassName('message-status')[0];
let lastLoading;


function onOpen() {
  msgSubmit.disabled = false;
  let status = msgTplStatus.cloneNode(true);
  status.getElementsByClassName('message-text')[0].innerText = 'Пользователь появился в сети';
  msgContent.appendChild(status);
}

function getCurTime() {
  let date = new Date();
  let hours = date.getHours();
  hours = hours > 9 ? hours : '0' + hours;
  let minutes = date.getMinutes();
  minutes = minutes > 9 ? minutes : '0' + minutes;
  return hours + ':' + minutes;
}

function onMessage(event) {
  var msg = event.data;
  if (msg == '...') {
    let loadingMsg = msgTplLoading.cloneNode(true);
    msgContent.appendChild(loadingMsg);
    lastLoading = loadingMsg;
  } else {
    if (lastLoading) {
      msgContent.removeChild(lastLoading);
    }
    let msgItem = msgTpl.cloneNode(true);
    msgItem.getElementsByClassName('message-text')[0].innerText = msg;
    msgItem.getElementsByClassName('timestamp')[0].innerText = getCurTime();
    msgContent.appendChild(msgItem);
  }

}

function onClose() {
  msgSubmit.disabled = true;
  let status = msgTplStatus.cloneNode(true);
  status.getElementsByClassName('message-text')[0].innerText = 'Пользователь не в сети';
  msgContent.appendChild(status);
}

function onSubmit(event) {
  event.preventDefault();
  let msg = msgInput.value;
  msgInput.value='';
  connection.send(msg);
  let msgItem = msgTplPersonal.cloneNode(true);
  msgItem.getElementsByClassName('message-text')[0].innerText = msg;
  msgItem.getElementsByClassName('timestamp')[0].innerText = getCurTime();
  msgContent.appendChild(msgItem);
}

connection.addEventListener('open', onOpen);
connection.addEventListener('message', onMessage);
connection.addEventListener('close', onClose);
msgSubmit.addEventListener('click', onSubmit);
