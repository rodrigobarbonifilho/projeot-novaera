const indicators = document.querySelectorAll(".indicator");

indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
        let targetContainer = getPos(indicator.firstElementChild.attributes["href"]);
        window.scroll(0, targetContainer);
    })
})

function getPos(target) {
    return document.querySelector(`${target.value}`).getBoundingClientRect().y
}