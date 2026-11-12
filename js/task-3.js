'use strict';

const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');

const updatePreview = () => {
  const input = inputName.value.trim();
  if (input !== '') {
    outputName.textContent = input;
  } else {
    outputName.textContent = 'Anonymous';
  }
};
inputName.addEventListener('input', updatePreview);
