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

const dishesMarkup = createDishesMenu(menu);
menuContainer.insertAdjacentHTML('beforeend', dishesMarkup);
switcher.addEventListener('change', onSwitcherClick);

currentTheme();
switchPosition();

function createDishesMenu(menu) {
    return dishCards(menu);
}

function onSwitcherClick(evt) {
    if (evt.currentTarget.checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function currentTheme() {
    if (localStorage.getItem('theme')) {
        body.classList.add(localStorage.getItem('theme'));
    } else body.classList.add(Theme.LIGHT);
}

function switchPosition() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        switcher.setAttribute('checked', 'checked');
    }
}
