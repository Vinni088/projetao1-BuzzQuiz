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
function Jogar_quizz(identificador) {
    for (let i = 0; i < quizzes.length; i++) {
        if (identificador === quizzes[i].id) {
            quizz_execução = quizzes[i];
        }
    }

    let corpo = document.querySelector('.corpo-inteiro');
    corpo.innerHTML = "";

    corpo.innerHTML += `
    <div data-test="banner" class="titulo-quiz"> 
        <img src=${quizz_execução.image}> 
        <p> titulo do quiz </p>
    </div>`;

    for(let i = 0; i <quizz_execução.questions.length; i++) {
        let respostas = quizz_execução.questions[i].answers;
        respostas.sort(comparador);
        corpo.innerHTML +=`
        <div data-test="question" class="pergunta-quiz">
            <div data-test="question-title" class="titulo-pergunta">
                ${quizz_execução.questions[i].title}
            </div>

        <div class="opcoes-quiz">
          <div data-test="answer" class="opcao-quiz">
            <img src="${respostas[0].image}" >
            <span data-test="answer-text">${respostas[0].text}</span>
          </div>

          <div data-test="answer" class="opcao-quiz">
            <img src="${respostas[1].image}" >
            <span data-test="answer-text">${respostas[1].text}</span>
          </div>

          <div data-test="answer" class="opcao-quiz">
            <img src="${respostas[2].image}" >
            <span data-test="answer-text">${respostas[2].text}</span>
          </div>

          <div data-test="answer" class="opcao-quiz">
            <img src="${respostas[3].image}" >
            <span data-test="answer-text">${respostas[3].text}</span>
          </div>
        </div>
      </div>`
    }   
}