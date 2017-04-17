'use strict';
//загруженные контакты преобразовываем в верстку
function showContacts() {
  var contacts = JSON.parse(loadContacts());
  var tempItem = '';
  for (let i = 0; i < contacts.length; i++) {
    tempItem += '<li data-email="' + contacts[i].email + '" data-phone="' + contacts[i].phone + '"><strong>' + contacts[i].name + '</strong></li>';
  }
  return tempItem;
}
//заполним список контактов
document.querySelector('ul.contacts-list').innerHTML += showContacts();