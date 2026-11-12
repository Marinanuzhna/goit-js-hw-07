'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

const newColor = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
};

button.addEventListener('click', newColor);
