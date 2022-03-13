const toggle_button = document.querySelector("#navbar__toggle-js");
const links_div = document.querySelector("#collapse-links-js");
let test = true;

toggle_button.addEventListener("click", () => {
    toggle_button.classList.toggle("activate", test);
    links_div.classList.toggle("activate", test);
    test = !test;

})