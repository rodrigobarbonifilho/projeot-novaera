let show = false;

let toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("activate");

    show = !show;
})