'use strict';
const request = new XMLHttpRequest();
const content = document.getElementById('content');
function setData() {
  let req_data = ''
  if (request.status === 200) {
    let req_data = JSON.parse(request.responseText);
    content.innerHTML='';
    let list_item = '';
    for (let i of req_data) {
      list_item = `<li
        data-title="${i.title}"
        data-author="${i.author.name}"
        data-info="${i.info}"
        data-price="${i.price}">
        <img
          src="${i.cover.small}">
      </li>`;
      content.innerHTML+=list_item;
    }
  }
}
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book/');
request.send();
request.addEventListener('load', setData);

