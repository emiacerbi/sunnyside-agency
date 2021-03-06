const mobileMenu = document.querySelector('.header__nav__menu')
const hamburguer = document.querySelector('.fa.fa-bars')
const triangle = document.querySelector('.triangle')
const arrow = document.querySelector('.fa-solid.fa-arrow-down-long')

let isShown = false

hamburguer.addEventListener('click', () => {
    if (!isShown) 
    {
        mobileMenu.style.transform = 'translateX(-50%) scale(1)'
        triangle.style.opacity = '1'
        isShown = true;
    } 
    else if (isShown)
    {
        mobileMenu.style.transform = 'translateX(-50%) scale(0)'
        triangle.style.opacity = '0'
        isShown = false;
    }
})

arrow.addEventListener('click', () => {
    document.querySelector('#main').scrollIntoView({
        behavior: 'smooth'
      });
})



