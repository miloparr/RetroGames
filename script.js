// hamburger clickable
const bar = document.querySelector('#bar');

const navbar = document.querySelector('#nav');

const close = document.querySelector('#close');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}