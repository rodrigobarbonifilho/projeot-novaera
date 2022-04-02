const indicators = document.querySelectorAll(".indicator");
const nav = document.getElementById("navbar");
const previewLink = document.querySelectorAll("#preview-content-js");

// Mudando de acordo com os indicadores de cada container
indicators.forEach((indicator) => { // Adiciona um evento para cada indicador
    indicator.addEventListener("click", () => {
        let targetContainer = indicator.firstElementChild.attributes["href"]; // Pego a posição Y do container
        let targetContainerY = getPos(targetContainer);
        let navY = nav.getBoundingClientRect().y;

        if (targetContainer.value === "#info-container") {
            window.scrollBy(0, navY);
        } else {
            window.scrollBy(0, targetContainerY); // Faço a tela dar um scroll até aquela posição
        }
    })
})

// Mudando de acordo com os previews container
previewLink.forEach((link) => {
    link.addEventListener("click", () => {
        let targetContainer = link.attributes["target"];
        console.log(targetContainer.value);
        let targetContainerY = getPos(targetContainer);
        let navY = nav.getBoundingClientRect().y;

        if (targetContainer.value === "#info-container") {
            window.scrollBy(0, navY);
        } else {
            window.scrollBy(0, targetContainerY);
        }
    })
})

// Funções
function getPos(target) {
    let targetY = document.querySelector(`${target.value}`).getBoundingClientRect().y; // pegar a altura do container selecionado em relação a tela do cliente
    return targetY; // Retorno a altura
}
