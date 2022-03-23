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


// Depending on the width of the screen, the arrow will scroll a little bit more.
arrow.addEventListener('click', () => {
    if (window.innerWidth >= 750 && window.innerWidth < 1400) {
        window.scrollBy(0,900);
    } else if (window.innerWidth >= 1400 )
    {
        window.scrollBy(0,1000);
    }
})



