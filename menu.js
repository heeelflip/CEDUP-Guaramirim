let btn_menu = document.getElementById('btn_menu');
let menu = document.getElementById('menu_mobile');
let overlay = document.getElementById('overlay-menu');

btn_menu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
})