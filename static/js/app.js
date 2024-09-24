const LIGHT_MODE = "light";
const DARK_MODE = "dark";
const MODE_KEY = "color-mode";

const toggle = document.querySelector(".toggle");
const body = document.body;

function setMode(mode) {
    body.classList.remove(LIGHT_MODE, DARK_MODE);
    body.classList.add(mode);
    localStorage.setItem(MODE_KEY, mode);
}

function toggleMode() {
    const currentMode = body.classList.contains(LIGHT_MODE)
        ? DARK_MODE
        : LIGHT_MODE;
    setMode(currentMode);
}

function init() {
    const savedMode = localStorage.getItem(MODE_KEY) || DARK_MODE;
    setMode(savedMode);

    toggle.addEventListener("click", toggleMode);
}

init();
