const hamButton = document.querySelector('.menu-toggle');
const header = document.querySelector('#header');
console.log(header);
hamButton.addEventListener('click', ()=> header.classList.toggle('ham'))

