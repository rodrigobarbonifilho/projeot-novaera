import jobs from "../jobs.json" assert {type: "json"};

const searchBox = document.querySelector("#searchJs");
const jobCardsContainer = document.querySelector(".job-cards-container");

/*
<div class="job-card">
    <div class="job-image"></div>
    <div class="job-info">
        <div class="top">
            <div class="content">
                <h3>Nome da Vaga</h3>
                <p>Local</p>
                <p>Empresa</p>
            </div>
            <div class="enterprise-image"></div>
        </div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum rerum reiciendis est. Quas architecto cumque quam officiis culpa aliquid nulla enim ea voluptatem ipsum, voluptas soluta! Voluptates, magni. Cupiditate, repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sapiente iusto accusantium deserunt laudantium at minus natus vitae aut consequuntur! Architecto porro quis blanditiis iste distinctio eveniet eaque explicabo veritatis.
        </p>
        <div class="buttons-wrapper">
            <button>Candidatar-se à Vaga</button>
            <button class="secondary">
                <p>Torne-se apto à vaga!</p>
                <p>Conheça nossos cursos</p>
            </button>
        </div>
    </div>
</div>
*/

function createVaga(vagaInfo) {
    function createDiv() { return document.createElement("div"); };

    const jobCard = createDiv(); jobCard.className = "job-card";

    const jobImage = createDiv(); jobImage.className = "job-image";
    jobImage.style.backgroundImage = `url(${vagaInfo.imagem})`;

    const jobInfo = createDiv(); jobInfo.className = "job-info"
    const top = createDiv(); top.className = "top";
    const content = createDiv(); content.className = "content";
    const h3 = document.createElement("h3"); h3.innerText = vagaInfo.nome;
    const p1 = document.createElement("p"); p1.innerText = vagaInfo.local;
    const p2 = document.createElement("p"); p2.innerText = vagaInfo.empresa;
    const enterpriseImage = createDiv(); enterpriseImage.className = "enterprise-image";
    enterpriseImage.style.backgroundImage = `url(${vagaInfo.logoEmpresa})`;

    const p3 = document.createElement("p"); p3.innerText = vagaInfo.conteudo;

    const buttonsWrapper = createDiv(); buttonsWrapper.className = "buttons-wrapper";
    const button1 = document.createElement("button"); button1.textContent = "Candidatar-se à Vaga";
    const button2 = document.createElement("button"); button2.innerHTML = "<a href='contato.html'><p>Torne-se apto à vaga!</p><p>Conheça nossos cursos</p></a>"; button2.classList = "secondary"

    content.appendChild(h3);
    content.appendChild(p1);
    content.appendChild(p2);

    top.appendChild(content);
    top.appendChild(enterpriseImage);

    buttonsWrapper.appendChild(button1);
    buttonsWrapper.appendChild(button2);

    jobInfo.appendChild(top);
    jobInfo.appendChild(p3);
    jobInfo.appendChild(buttonsWrapper);

    buttonsWrapper.appendChild(button1);
    buttonsWrapper.appendChild(button2);

    jobCard.appendChild(jobImage);
    jobCard.appendChild(jobInfo);

    return jobCard;
}

function createWarn(text) {
    const warningContainer = document.createElement("div");
    warningContainer.classList = "warning-container";

    const h2 = document.createElement("h2");
    const image = document.createElement("img");

    if (text === "") {
        h2.innerText = "Volte mais tarde, estamos procurando mais oportunidades para você!";
        image.src = "images/Serviços/no-jobs-image.svg";
    } else {
        h2.innerText = "Sem resultados para esta pesquisa!";
        image.src = "images/Serviços/no-results-image.svg";
    }

    warningContainer.appendChild(h2);
    warningContainer.appendChild(image);
    jobCardsContainer.appendChild(warningContainer);
}

function cleanJobCardsContainer() {
    const jobCardsContainerChildren = Array.from(jobCardsContainer.children);

    jobCardsContainerChildren.forEach(children => {
        jobCardsContainer.removeChild(children);
    })
}

function filterJobs(text) {
    let vagasKeys = Object.keys(jobs);
    let vagas = [];

    vagasKeys.forEach(key => {
        let vagaInfo = Object.values(jobs[key]);

        if (text !== "") {
            let re = new RegExp(`${text}`, "gi");

            vagaInfo.forEach(info => {
                if (re.test(info) && vagas.indexOf(key) === -1) {
                    vagas.push(key);
                }
            })
        } else {
            vagas.push(key);
        }
    })

    return vagas;
}

function setVagas(text) {
    cleanJobCardsContainer();

    let vagas = filterJobs(text);

    console.log(vagas);

    if (vagas.length === 0) {
        jobCardsContainer.appendChild(createWarn(text));
    } else {
        vagas.forEach(vaga => {
            jobCardsContainer.appendChild(createVaga(jobs[vaga]));
        })
    }
}

window.addEventListener("load", () => {
    setVagas("");
})

searchBox.addEventListener("input", () => {
    setVagas(searchBox.value);
});
