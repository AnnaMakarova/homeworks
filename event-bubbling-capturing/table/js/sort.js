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

document.getElementsByTagName('table')[0].addEventListener('click', handleTableClick);
