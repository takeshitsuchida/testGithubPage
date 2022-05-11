const btn = document.querySelector('.btn');
const h1 = document.querySelector('.h1');
const h2 = document.querySelector('.h2');

function setColor(){
    h1.classList.toggle('clicked');
    h2.classList.toggle('clicked');
}

btn.addEventListener('click', setColor);