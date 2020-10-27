const mainMenu = document.querySelector('.main-menu')
const close = document.querySelector('.closeMenu')
const open = document.querySelector('.openMenu')

open.addEventListener('click', show)
close.addEventListener('click', exit)

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function exit() {
    mainMenu.style.top = '-100%';
}

