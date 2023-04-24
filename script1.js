axios.defaults.headers.common['Authorization'] = 'EAfOvX9dRBbHsFCJzme9yXNE'; 

let quizzes = [];
function Play_quizz(identificador) {
    alert("Vamos jogar o quizz de ID: " + identificador);
}
function povoar_quizzes() {
    const localização = document.querySelector(".todos_os_quizzes");
    for (let i = 0; i < quizzes.length; i++) {
        let div_adicional = `
        <div data-test="others-quiz" onclick="Play_quizz(${quizzes[i].id})" class="Quiz_individual">
            <img  class="Img_quiz" src=${quizzes[i].image} alt="">
            <div class="Titulo_quiz_individual">${quizzes[i].title}</div>
            <div class="cover"></div>
        `;
        localização.innerHTML += div_adicional;
    }
}
function analise_quizzes(resposta) {
    quizzes = resposta.data;
    povoar_quizzes();
}
function coletar_quizzes() {
    const promisse_quizzes = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
    promisse_quizzes.then(analise_quizzes);
}
coletar_quizzes();

function tela_inicial() {
    const corpo = document.querySelector(".corpo-inteiro");
    corpo.innerHTML = `
        <div class="seus_quizzes">
            <p class="Sem_quizzes">Você não criou nenhum quizz ainda :(</p>
            <button class="create-btn" onclick="criarQuizz()" class="botao_criar_quizz"> Criar Quizz </button>
        </div>
        <div class="todos_os_quizzes">
            <h1>Todos os Quizzes</h1> 
        </div>
    `;
    povoar_quizzes();
}