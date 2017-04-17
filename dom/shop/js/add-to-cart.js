'use strict';
//элементы для отображения содержимого корзины
const cartCount = document.querySelector('#cart-count');
const totalPrice = document.querySelector('#cart-total-price');
//добавление товара в корзину
function addItem() {
  console.log(this);
  var curCount = +cartCount.innerHTML + 1;
  cartCount.innerHTML = curCount;
  //для #cart-total-price тоже будем хранить текущую data-price
  var curPrice = totalPrice.dataset.price ? +totalPrice.dataset.price : 0;
  curPrice += +this.dataset.price;
  totalPrice.dataset.price = curPrice;
  totalPrice.innerHTML = getPriceFormatted(curPrice);
}
//обработчики кликов добавления элемента в корзину
var items = Array.from(document.querySelectorAll('button.add'));
for (let item of items) {
  item.addEventListener('click', addItem);
}