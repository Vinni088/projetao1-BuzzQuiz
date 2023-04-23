//criar quizz: infos básicas
let tituloQuizz = '';
let imagemQuizz = '';
let numPerguntas = 0;
let numNiveis = 0;

let corpoInteiro = document.querySelector('.corpo-inteiro');

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
        mock.title = tituloQuizz
        mock.image = imagemQuizz
        definirNiveis()
    }   
}


//criar quizz: perguntas
const perguntasCorpo = [
    `<div class="cabecalho">BuzzQuizz</div>
    <div class="instrucoes-criacao">Crie suas Perguntas</div> 
    <div class="container-perguntas"></div>
    <button onclick="checarPerguntas()" class="botao-avancar"><p>Prosseguir pra criar níveis</p></button>`
]

let todasPerguntas = [];
let todasCores = [];
let todasImagens = [];
let respostasCorretas = [];
let respostasErradas1 = [];

function definirPerguntas() {
    corpoInteiro.innerHTML = perguntasCorpo;
    let  containerPerguntas= document.querySelector('.container-perguntas');
    for (i = 0; i < numPerguntas; i++) {
        const perguntasBase = [
            `<div class="pergunta${i+1} box-pergunta">
                <div class="pergunta${i+1} pergunta-visivel escondido">
                    <div class="box-inputs">
                        <p>Pergunta ${i+1}</p>
                        <input class="pergunta${i+1} texto-pergunta" type="text" placeholder="Texto da pergunta">
                        <input class="pergunta${i+1} cor-de-fundo" type="text" placeholder="Cor de fundo da pergunta">
                    </div>
                    <div class="box-inputs">
                        <p>Resposta correta</p>
                        <input class="pergunta${i+1} resposta-correta" type="text" placeholder="Resposta correta">
                        <input class="pergunta${i+1} url-img-resposta resp-correta" type="text" placeholder="URL da imagem">
                    </div>
                    <div class="box-inputs">
                        <p>Resposta Incorreta</p>
                        <input class="pergunta${i+1} resposta-incorreta1" type="text" placeholder="Resposta incorreta 1">
                        <input class="pergunta${i+1} url-img-resposta resp-incorreta1" type="text" placeholder="URL da imagem 1">
                    </div>
                    <div class="box-inputs">
                        <input class="pergunta${i+1} resposta-incorreta2" type="text" placeholder="Resposta incorreta 2">
                        <input class="pergunta${i+1} url-img-resposta resp-incorreta2" type="text" placeholder="URL da imagem 2">
                    </div>
                    <div class="box-inputs">
                        <input class="pergunta${i+1} resposta-incorreta3" type="text" placeholder="Resposta incorreta 3">
                        <input class="pergunta${i+1} url-img-resposta resp-incorreta3" type="text" placeholder="URL da imagem 3">
                    </div>
                </div>
                <div class="pergunta${i+1} pergunta-colapsada">
                    <p>Pergunta ${i+1}</p>
                    <ion-icon class="pergunta${i+1} botao-editar" onclick="mostrarPergunta(this.parentNode)" name="create-outline"></ion-icon>
                </div>
            </div>`
        ]
        containerPerguntas.innerHTML += perguntasBase;
    }
    
    let perguntaVisivel1 = document.querySelector('.pergunta1 .pergunta-visivel');
    perguntaVisivel1.classList.remove('escondido'); 
    
    let perguntacolapsada1 = document.querySelector('.pergunta1 .pergunta-colapsada');
    perguntacolapsada1.classList.add('escondido');    
}

function mostrarPergunta(pColapsada) {
    let pVisivel = pColapsada.previousElementSibling
    
    let todasVisiveis = document.querySelectorAll('.pergunta-visivel');
    for(let i = 0; i < todasVisiveis.length; i++) {
        todasVisiveis[i].classList.add('escondido');
    }

    let todasColapsadas = document.querySelectorAll('.pergunta-colapsada');
    for(let i = 0; i < todasColapsadas.length; i++) {
        todasColapsadas[i].classList.remove('escondido');
    }

    pColapsada.classList.add('escondido');
    pVisivel.classList.remove('escondido');
}

function checarPerguntas() {
    todasPerguntas = document.querySelectorAll('.texto-pergunta');
    todasCores = document.querySelectorAll('.cor-de-fundo');
    todasImagensRCorreta = document.querySelectorAll('.url-img-resposta .resp-correta');
    todasImagensRErrada1 = document.querySelectorAll('.url-img-resposta .resp-incorreta1');
    respostasCorretas = document.querySelectorAll('.resp-correta');
    respostasErradas1 = document.querySelectorAll('.resp-incorreta1');

    let perguntasInseridas = [];
    let coresInseridas = [];
    let imagensRCInseridas = [];
    let imagensREInseridas = [];
    let respCorretasInseridas = [];
    let respErradasInseridas = [];

    for(let i = 0; i < todasPerguntas.length; i++) {
       let pergunta = todasPerguntas[i].value;
        if (pergunta.length < 20) {
            alert('As perguntas devem ter 20 caracteres no mínimo, por favor preencha as informações pedidas corretamente');
            break;
        } else {
           perguntasInseridas.push(true);
        }
    }
    for(let i = 0; i < todasCores.length; i++) {
        let corfundo = todasCores[i].value;
        if (corfundo.length != 7 || corfundo[0] !== '#') {
            alert('As cores de fundo devem estar em formato hexadecimal, por favor preencha as informações pedidas corretamente');
            break;
        } else {
            coresInseridas.push(true);
        }
    }
    for(let i = 0; i < todasImagensRCorreta.length; i++) {
        let urlImg = todasImagensRCorreta[i].value;
        let httpsCheck = '';
        for(let j = 0; j < 8; j++) {
            httpsCheck += urlImg[j];
        }
        if(httpsCheck !== 'https://') {
            alert('As imagens devem estar em formato de URL, por favor preencha as informações pedidas corretamente');
            break; 
        } else {
            imagensRCInseridas.push(true);
        }
    }
    for(let i = 0; i < todasImagensRErrada1.length; i++) {
        let urlImg = todasImagensRErrada1[i].value;
        let httpsCheck = '';
        for(let j = 0; j < 8; j++) {
            httpsCheck += urlImg[j];
        }
        if(httpsCheck !== 'https://') {
            alert('As imagens devem estar em formato de URL, por favor preencha as informações pedidas corretamente');
            break; 
        } else {
            imagensREInseridas.push(true);
        }
    }
    for(let i = 0; i < respostasCorretas.length; i++) {
        let respCorreta = respostasCorretas[i].value;
        if (respCorreta == null || respCorreta == undefined) {
            alert('As respostas corretas não podem estar em branco, por favor preencha as informações pedidas corretamente');
            break;
        } else {
            respCorretasInseridas.push(true);
        }
    }
    for(let i = 0; i < respostasErradas1.length; i++) {
        let respErrada1 = respostasErradas1[i].value;
        if(respErrada1 == null || respErrada1 == undefined) {
            alert('É necessário ter ao menos uma resposta incorreta, por favor preencha as informações pedidas corretamente');
            break; 
        } else {
            respErradasInseridas.push(true);
        }
    }

    let perguntasForamInseridas = todasPerguntas.length == perguntasInseridas.length;
    let coresForamInseridas = todasCores.length == coresInseridas.length;
    let imagensRCForamInseridas = todasImagensRCorreta.length == imagensRCInseridas.length;
    let imagensREForamInseridas = todasImagensRErrada1.length == imagensREInseridas.length;
    let respCorretasForamInseridas = respostasCorretas.length == respCorretasInseridas.length;
    let respErradasForamInseridas = respostasErradas1.length == respErradasInseridas.length;

    if(perguntasForamInseridas == true && coresForamInseridas == true && imagensRCForamInseridas == true && imagensREForamInseridas == true && respCorretasForamInseridas == true && respErradasForamInseridas == true) {
        definirNiveis();
    }
}

//criar quizz: níveis
const niveisCorpo = [
    `<div class="cabecalho">BuzzQuizz</div>
    <div class="instrucoes-criacao">Agora, decida os níveis!</div>
    <div class="container-niveis"></div>   
    <button onclick="" class="botao-avancar"><p>Finalizar Quizz</p></button>`    
]

function definirNiveis() {
    corpoInteiro.innerHTML = niveisCorpo;
    let containerNiveis = document.querySelector('.container-niveis');
    console.log(numNiveis);
    for (let i = 0; i < numNiveis; i++) {
        const niveisBase = [
            `<div class="nivel${i+1} box-nivel">
                <div class="nivel${i+1} nivel-visivel escondido">
                    <div class="box-inputs">
                        <p>Nível ${i+1}</p>
                        <input class="nivel${i+1}" type="text" placeholder="Título do nível">
                        <input class="nivel${i+1}" type="text" placeholder="% de acerto mínima">
                        <input class="nivel${i+1}" type="text" placeholder="URL da imagem do nível">
                        <textarea name="descricaoNivel" class="nivel${i+1} descricao-nivel" placeholder="Descrição do nível"></textarea>
                    </div>   
                </div>
                <div class="nivel${i+1} nivel-colapsado">
                    <p>Nível ${i+1}</p>
                    <ion-icon class="nivel${i+1} botao-editar" onclick="" name="create-outline"></ion-icon>
                </div>
            </div>`
        ]
        containerNiveis.innerHTML += niveisBase;
    }

    
}



const mock = {
    title: '',
	image: '',
    questions: [
        {
            title: "",
            color:"",
            answers: [
                {
                    text:"",
                    image: "",
                    isCorrectAnswer: true
                },
                {
                    text:"",
                    image: "",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels:[
        {
			title: "",
			image: "",
			text: "",
			minValue: 0
		},
		{
			title: "",
			image: "",
			text: "",
			minValue: 50
		}
    ]
}