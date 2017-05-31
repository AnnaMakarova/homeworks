'use strict';
const contentForm = document.getElementsByClassName('contentform')[0];
const sendMsg = contentForm.getElementsByClassName('button-contact')[0];
const outputMsg = document.getElementById('output');
const cancelMsg = outputMsg.getElementsByClassName('button-contact')[0];
const inputs = Array.from(contentForm.getElementsByTagName('input'));
inputs.push(contentForm.getElementsByTagName('textarea')[0]);
const zipField = contentForm.querySelector('[name=zip]');

function validateFields() {
  let vResult = true;
  for (let item of inputs) {
    if (!item.value) {
      vResult = false;
      break;
    }
  }
  sendMsg.disabled = !vResult;
}
function onlyNumbers(eo) {
  if ((eo.keyCode == 32) || (65 <= eo.keyCode && eo.keyCode <= 90) || (186 <= eo.keyCode && eo.keyCode <= 222) || (eo.shiftKey && 48 <= eo.keyCode && eo.keyCode <= 57)) {
    eo.preventDefault();
  }
}
function showMsg(eo) {
  eo.preventDefault();
  for (let item of inputs) {
    let outItem = outputMsg.querySelector(`#${item.name}`);
    if (outItem) {
      outItem.value = item.value;
    }
  }
  contentForm.classList.add('hidden');
  outputMsg.classList.remove('hidden');
}
function showForm() {
  contentForm.classList.remove('hidden');
  outputMsg.classList.add('hidden');
}
contentForm.addEventListener('input', validateFields);
zipField.addEventListener('keydown', onlyNumbers);
sendMsg.addEventListener('click', showMsg);
cancelMsg.addEventListener('click', showForm);