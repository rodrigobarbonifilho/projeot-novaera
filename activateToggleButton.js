const toggleButton = document.querySelector(".toggle-button");
const menu = document.querySelector(".cabecalho-menu");
const nav = document.querySelector("nav");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("activate");
    menu.classList.toggle("activate");
    nav.classList.toggle("activate");
    document.querySelector("html").classList.toggle("no-scroll");
});