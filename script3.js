//criar quizz: infos básicas
let tituloQuizz = '';
let imagemQuizz = '';
let numPerguntas = 0;
let numNiveis = 0;

const infoBasica = [
    `<div class="cabecalho">BuzzQuizz</div>
    <div class="instrucoes-criacao">Comece pelo começo</div>
    <div class="container-inputs infos-basicas">
        <input class="titulo-quizz" type="text" placeholder="Título do seu quizz">
        <input class="url-img-quizz" type="text" placeholder="URL da imagem do seu quizz">
        <input class="qntd-perguntas-quizz" type="text" placeholder="Quantidade de perguntas do quizz">
        <input class="qntd-niveis-quizz" type="text" placeholder="Quantidade de níveis do quizz">       
    </div>
    <button onclick="checarInfo()" class="botao-avancar">
        <p>Prosseguir pra criar perguntas</p>
    </button>` 
]
function criarQuizz() {
    let corpoInteiro = document.querySelector('.corpo-inteiro');
    corpoInteiro.innerHTML = infoBasica;
}
function checarInfo() {
    let httpsCheck = '';
    tituloQuizz = document.querySelector('.titulo-quizz').value;
    imagemQuizz = document.querySelector('.url-img-quizz').value;
    numPerguntas = document.querySelector('.qntd-perguntas-quizz').value;
    numNiveis = document.querySelector('.qntd-niveis-quizz').value;

    for(i = 0; i < 8; i++) {
        httpsCheck += imagemQuizz[i];
    }

    if (tituloQuizz.length > 65 || tituloQuizz.length < 20 || tituloQuizz == null) {
        alert('Por favor, preencha as informações pedidas corretamente');
    } else if(httpsCheck != 'https://') {
        alert('Por favor, preencha as informações pedidas corretamente');
    } else if (numPerguntas < 3 || numPerguntas == null) {
        alert('Por favor, preencha as informações pedidas corretamente');
    } else if (numNiveis < 2 || numNiveis == null) {
        alert('Por favor, preencha as informações pedidas corretamente');
    } else {
        //funcaoPerguntasVaiAqui
    }   
}


