console.log("hello")

const mobileMenu = document.querySelector('.header__nav__menu')
const hamburguer = document.querySelector('.fa.fa-bars')
const triangle = document.querySelector('.triangle')

let isShown = false

hamburguer.addEventListener('click', () => {
    if (!isShown) {
        mobileMenu.style.opacity = '1'
        triangle.style.opacity = '1'
        isShown = true;
    } else if (isShown)
    {
        mobileMenu.style.opacity = '0'
        triangle.style.opacity = '0'
        isShown = false;
    }
    
})