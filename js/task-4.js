'use strict';

const form = document.querySelector('form.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const emailPas = {
    email: email,
    password: password,
  };
  console.log(emailPas);
  event.target.reset();
});
