'use strict';
const listBlock = document.getElementsByClassName('list-block')[0];
const checkItems = Array.from(listBlock.getElementsByTagName('input'));
const outputItem = listBlock.getElementsByTagName('output')[0];
//count selected items in checklist
function checkList() {
  let checkedCount = 0;
  for (let item of checkItems) {
    if (item.checked) {
      checkedCount++;
    }
  }
  outputItem.value = checkedCount;
  if (checkedCount == checkItems.length) {
    listBlock.classList.add('complete');
  } else {
    listBlock.classList.remove('complete');
  }
}
//initial count
checkList();
//set handler on list items change
listBlock.addEventListener('change', checkList);


