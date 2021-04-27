const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navLink = document.querySelectorAll('.nav-mobile__link');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navMobile.classList.toggle('nav-mobile--active')
}

hamburger.addEventListener('click', handleClick);



const hideMenu = () => {
    navMobile.classList.remove('nav-mobile--active');
    hamburger.classList.remove('hamburger--active');
}

navLink.forEach((item) => {
    item.addEventListener('click', hideMenu)
});