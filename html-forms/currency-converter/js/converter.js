'use strict';

const request = new XMLHttpRequest();

const loaderItem=document.getElementById('loader');
const contentItem=document.getElementById('content');

const valueToConvert=document.getElementById('source');
const currencyFrom=document.getElementById('from');
const currencyTo=document.getElementById('to');
const resultValue=document.getElementById('result');


let currency_data = [];

function onDataLoaded(){
  loaderItem.classList.add('hidden');
  contentItem.classList.remove('hidden');
  if (request.status === 200) {
    let currency_data = JSON.parse(request.responseText);
    let item_data = '';
    for(let item of currency_data){
      item_data = `<option value="${item.value}" label="${item.code}">${item.title}</option>`;
      currencyFrom.innerHTML+=item_data;
      currencyTo.innerHTML+=item_data;
    }
  }
}

function countResult(){
  resultValue.value=(valueToConvert.value*currencyFrom.value/currencyTo.value).toFixed(2) ;
}

loaderItem.classList.remove('hidden');
request.open('GET', ' https://neto-api.herokuapp.com/currency');
request.send();
request.addEventListener('load', onDataLoaded);
currencyFrom.addEventListener('change', countResult);
currencyTo.addEventListener('change', countResult);
valueToConvert.addEventListener('input', countResult);

