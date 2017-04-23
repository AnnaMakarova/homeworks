'use strict';
//загруженные контакты преобразовываем в верстку
function showContacts() {
  var contacts = JSON.parse(loadContacts());
  return contacts.reduce(function(tempItem,curContact){
    return tempItem+`<li data-email="${curContact.email}" data-phone="${curContact.phone}"><strong>${curContact.name}</strong></li>`;
  },'');
}
//заполним список контактов
document.querySelector('ul.contacts-list').innerHTML += showContacts();