'use strict';

function handleTableClick(event) {
  let thElem = event.target;
  event.stopPropagation();
  let propName = thElem.dataset.propName;
  let dir = thElem.dataset.dir ? -thElem.dataset.dir : 1;
  thElem.dataset.dir = dir;
  this.dataset.sortBy = propName;
  sortTable(propName, dir);
}

/********************************
 * Не менять код ниже           *
 ********************************/

const table = document.querySelector('table');
table.addEventListener('click', handleTableClick);