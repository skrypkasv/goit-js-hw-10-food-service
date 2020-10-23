export const checkbox = document.querySelector('#theme-switch-toggle');
export const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function checkForSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if ((savedTheme === null) || (savedTheme === Theme.LIGHT)) {
        return
    } else {
        switchToDark();
    }
}

export function checkboxChangeHandler(e) {
    if (e.target.checked) {
        switchToDark();
    } else {
        switchToLight();
    }
}

function switchToDark() {
    body.classList.remove(`${Theme.LIGHT}`);
    body.classList.add(`${Theme.DARK}`);
    localStorage.setItem('theme', Theme.DARK);
    checkbox.checked = true;
}
function switchToLight() {
  body.classList.remove(`${Theme.DARK}`);
  localStorage.setItem('theme', Theme.LIGHT);
  body.classList.add(`${Theme.LIGHT}`);
}