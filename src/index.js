import { checkbox, checkForSavedTheme, checkboxChangeHandler } from './js/theme';
checkbox.addEventListener('change', checkboxChangeHandler);
document.addEventListener('DOMContentLoaded', checkForSavedTheme);

import data from './js/menu.json';
import menuItemsTmpl from './templates/menu-items.hbs';
const ul = document.querySelector('ul.js-menu');

ul.innerHTML = menuItemsTmpl(data);