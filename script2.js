axios.defaults.headers.common['Authorization'] = 'EAfOvX9dRBbHsFCJzme9yXNE'; 

let quizzes = [];

function analise_quizzes(resposta) {
    quizzes = resposta.data;
}
function coletar_quizzes() {
    const promisse_quizzes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
    promisse_quizzes.then(analise_quizzes);
}
coletar_quizzes();
function comparador() {
    let meio = 0.5;
    return Math.random() - meio;
}
let quizz_execução;
let numero_acertos = 0;
let numero_questões = 0;

function Marcar_resposta(endereço, identificador) {
    endereço.classList.add('marcado');
    if (identificador == true) {
        numero_acertos += 1;
        alert("acertou");
    }
}
function Jogar_quizz(identificador) {
    for (let i = 0; i < quizzes.length; i++) {
        if (identificador === quizzes[i].id) {
            quizz_execução = quizzes[i];
        }
    }
    let corpo = document.querySelector('.corpo-inteiro');
    corpo.innerHTML = "";
    corpo.innerHTML += `
    <div class="titulo-quiz"> 
        <img src=${quizz_execução.image}> 
        <p> titulo do quiz </p>
    </div>`;

    for(let i = 0; i <quizz_execução.questions.length; i++) {
        let respostas = quizz_execução.questions[i].answers;
        respostas.sort(comparador);
        corpo.innerHTML +=
        `
        <div class="pergunta-quiz">
            <div class="titulo-pergunta">
                ${quizz_execução.questions[i].title}
            </div>

            <div class="opcoes-quiz pergunta${i}">
                Placeholder
            </div>
        </div>
        `;
        let corpo_quizz = document.querySelector(`.pergunta${i}`) 
        corpo_quizz.innerHTML = "";
        for (let j = 0; j < respostas.length; j++) {
            corpo_quizz.innerHTML += `
            <div class="opcao-quiz" onclick="Marcar_resposta(this, ${respostas[j].isCorrectAnswer})">
                <img src="${respostas[j].image}" >
                <span>${respostas[j].text}</span>
            </div>`;
        }
    }   
}