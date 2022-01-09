const cards = {
    retroescavadeira: {
        img: "images/retroescavadeira-card.jpg",
        titulo: "Restroescavadeira",
        descricao: "Curso sobre Operação de Retroescavadeiras",
        id: "retroescavadeira",
    },
    solda: {
        img: "images/solda-card.jpg",
        titulo: "Solda",
        descricao: "Curso sobre Solda Avançada Shuernous",
        id: "solda",
    },
    empilhadeira: {
        img: "images/empilhadeira-card.jpg",
        titulo: "Empilhadeira",
        descricao: "Curso sobre Operação AVANÇADA de Empilhadeiras",
        id: "empilhadeira",
    },
    formacao: {
        img: "images/mecanico-card.jpg",
        titulo: "Formação de Mecânicos Florestais",
        descricao: "Curso de Especialização em Manutenção AVANÇADA de Máquinas Florestais TOP",
        id: "formacao",
    },
    maquinasFlorestais: {
        img: "images/harvester-card.jpg",
        titulo: "Máquinas Florestais",
        descricao: "Curso de Operação MAIS QUE AVANÇADA sobre Máquinas Florestais",
        id: "maquinas-florestais",
    },
    teste: {
        img: "images/display.jpg",
        titulo: "Teste",
        descricao: "Teste Pequeno",
        id: "teste",
    }
}

function createCard() {
    let divPrincipal = document.querySelector(".conteudo-principal-cursos");

    for (let [key, values] of Object.entries(cards)) {
        let divCardContainer = document.createElement("div");
        let divCard = document.createElement("div");
        let imgCard = document.createElement("img");
        let tituloCard = document.createElement("h4");
        let descricaoCard = document.createElement("p");
        let btnCard = document.createElement("button");

        divCardContainer.className = "card-container";
        divCard.className = "card";
        imgCard.className = "card-imagem";
        imgCard.src = values.img;
        tituloCard.className = "card-titulo card-texto";
        tituloCard.textContent = values.titulo;
        descricaoCard.className = "card-descricao card-texto";
        descricaoCard.textContent = values.descricao;
        btnCard.className = "card-btn";
        btnCard.textContent = "Saber Mais";
        btnCard.addEventListener("click", function() {
            showDiv(values.id);
        });
    
        divCard.appendChild(imgCard);
        divCard.appendChild(tituloCard);
        divCard.appendChild(descricaoCard);
        divCard.appendChild(btnCard);
        divCardContainer.appendChild(divCard);
    
        divPrincipal.append(divCardContainer);            
    };
}