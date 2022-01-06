let show = false;

let toggleButton = document.querySelector(".toggle-button");
let menuSection = document.querySelector(".menu-section");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("activate");
    menuSection.classList.toggle("activate");

    show = !show;
})