const hamburger = document.querySelector('#hamburger-icon')
const nav = document.querySelector('#menu-bar')
const aboutPage = document.querySelector('.about')
const exit = document.querySelector('#close-btn')
const exit2 = document.querySelector('#close-btn2')
const menu = document.querySelector('#menus')
const home = document.querySelector('#home')
const about = document.querySelector('#about')

hamburger.addEventListener('click', show)
exit.addEventListener('click', close)
exit2.addEventListener('click', close2)
home.addEventListener('click', close)
about.addEventListener('click', displayInfo)


function show() {
    menu.style.display = 'flex'
    menu.style.top = '0'
}

function close() {
    menu.style.display = 'none'
}

function displayInfo() {
    aboutPage.style.display = 'flex'
    aboutPage.style.top = '0'
}

function close2() {
    aboutPage.style.display = 'none'
    menu.style.display = 'none'
}