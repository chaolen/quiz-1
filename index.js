const hamburger = document.querySelector('#hamburger-icon')
const nav = document.querySelector('#menu-bar')
const exit = document.querySelector('#close-btn')
const menu = document.querySelector('#menus')

hamburger.addEventListener('click', show)
exit.addEventListener('click', close)

function show() {
    menu.style.display = 'flex'
    menu.style.top = '0'
}

function close() {
    menu.style.display = 'none'
}