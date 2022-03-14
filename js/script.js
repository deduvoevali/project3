window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__header'),
        menuItem = document.querySelectorAll('.menu__list-item'),
        hamburger = document.querySelector('.hamburger__inner');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__inner--active');
        menu.classList.toggle('promo__header--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__inner--active');
            menu.classList.toggle('promo__header--active');
        });
    });
});