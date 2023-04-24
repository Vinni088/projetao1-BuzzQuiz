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

function Jogar_quizz(identificador) {
    let quizz_execução;
    let corpo = document.querySelector('.corpo-inteiro');
    corpo.innerHTML = "";
    for (let i = 0; i < quizzes.length; i++) {
        if (identificador === quizzes[i].id) {
            quizz_execução = quizzes[i];
        }
    }
    corpo.innerHTML += `
    <div class="titulo-quiz"> 
      <img src=${quizz_execução.image}> 
      <p> titulo do quiz </p>
    </div>
    `
}