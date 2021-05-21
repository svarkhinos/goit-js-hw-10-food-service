import './sass/main.scss';
import dishCards from '../src/templates/dish-cards.hbs';
import menu from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const dishesMarkup = dishCards(menu);
menuContainer.insertAdjacentHTML('beforeend', dishesMarkup);
switcher.addEventListener('change', onSwitcherClick);

currentTheme();

function onSwitcherClick(evt) {
    if (evt.currentTarget.checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function currentTheme() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        switcher.setAttribute('checked', 'checked');
        body.classList.add(Theme.DARK);
    } else {
        body.classList.add(Theme.LIGHT);
    }
}
