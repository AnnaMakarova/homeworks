'use strict';
const viewImg = document.getElementById('view');
const galleryItems = Array.from(document.getElementById('nav').getElementsByTagName('a'));
function selectItem(eo){
  //убираем клик по ссылке
  eo.preventDefault();
  //снимаем выбор со всех элеменков
  for(let item of galleryItems){
    item.classList.remove('gallery-current');
  }
  //выставляем на нужном
  this.classList.add('gallery-current');
  //прокинем картинку в view
  viewImg.setAttribute('src',this.getAttribute('href'));
  viewImg.setAttribute('title',this.querySelector('img').getAttribute('title'));
}
//навесим обработчики
for(let item of galleryItems){
  item.addEventListener('click',selectItem);
}