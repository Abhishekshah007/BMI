const email = document.querySelector('#email');

const psd = document.querySelector('#password');

const age = document.querySelector('#age');

const btn = document.querySelector('#lbtn');



btn.addEventListener('click', () => {



    window.localStorage.setItem('user', email);

    JSON.parse(window.localStorage.getItem('user'));


});