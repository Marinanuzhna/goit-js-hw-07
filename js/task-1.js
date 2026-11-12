'use strict';

const liItem = document.querySelectorAll('ul#categories .item');

console.log('Number of Categories:', liItem.length);
liItem.forEach(item => {
  const title = item.querySelector('h2').textContent;
  console.log('Category:', title);

  const list = item.querySelectorAll('li').length;
  console.log('Elements:', list);
});
