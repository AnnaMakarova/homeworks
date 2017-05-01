'use strict';
const tabHeaders = Array.from(document.querySelectorAll('nav a'));
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
const request = new XMLHttpRequest();
function loadData(eo) {
  eo.preventDefault();
  for (let tab of tabHeaders) {
    tab.classList.remove('active');
  }
  //выставляем на нужном
  this.classList.add('active');
  var dataAddr = this.getAttribute('href');
  request.open('GET', dataAddr);
  request.send();
}
function setData() {
  if (request.status === 200) {
    content.innerHTML = request.responseText;
  }
}
function showPreloader() {
  content.innerHTML = ''
  preloader.classList.remove('hidden')
}
function hidePreloader() {
  preloader.classList.add('hidden')
}
for (let tab of tabHeaders) {
  tab.addEventListener('click', loadData);
}
request.addEventListener('load', setData);
request.addEventListener('loadstart', showPreloader);
//не уверена, что надо на loadend делать, получается что сперва данные показываются, потом скрывается preloader
request.addEventListener('loadend', hidePreloader);
