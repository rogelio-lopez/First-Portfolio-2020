
// Controlling burger btn click
const burger = document.querySelector('.nav__burger');

burger.addEventListener('click', () => {

    const navMenu = document.querySelector('.nav__btns');
    const times = document.querySelector('#times');
    const bars = document.querySelector('#bars');

    if(navMenu.classList.contains('nav__btns--active')){
        navMenu.classList.remove('nav__btns--active');
        bars.style.display = 'inline';
        times.style.display = 'none';
    }
    else{
        navMenu.classList.add('nav__btns--active');
        bars.style.display = 'none';
        times.style.display = 'inline';
    }
});