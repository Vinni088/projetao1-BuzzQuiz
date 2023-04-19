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

function povoar_quizzes() {
    const localização = document.querySelector(".todos_os_quizzes");
    for (let i = 0; i < quizzes.length; i++) {
        let div_adicional;
    }
}
