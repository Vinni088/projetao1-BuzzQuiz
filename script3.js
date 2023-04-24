//criar quizz: infos básicas
const objetoQuizz = {
	title: "",
	image: "",
	questions: [
		{
			title: "",
			color: "",
			answers: [
				{
					text: "",
					image: "",
					isCorrectAnswer: true
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "",
			color: "",
			answers: [
				{
					text: "",
					image: "",
					isCorrectAnswer: true
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "",
			color: "",
			answers: [
				{
					text: "",
					image: "",
					isCorrectAnswer: true
				},
				{
					text: "",
					image: "",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
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
			minValue: 0
		}
	]
}



let tituloQuizz = '';
let imagemQuizz = '';
let numPerguntas = 0;
let numNiveis = 0;

let corpoInteiro = document.querySelector('.corpo-inteiro');

const infoBasica = [
    `
    <div class="voltar-a-tela1" onclick="tela_inicial()"><ion-icon class="icone-voltar" name="arrow-back-circle"></ion-icon></div>
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
    } else if (numPerguntas < 3 || numPerguntas == null || isNaN(numPerguntas) == true) {
        alert('Por favor, preencha as informações pedidas corretamente');
    } else if (numNiveis < 2 || numNiveis == null || isNaN(numNiveis) == true) {
        alert('Por favor, preencha as informações pedidas corretamente');
    } else {
        objetoQuizz.title = tituloQuizz
        objetoQuizz.image = imagemQuizz
        definirPerguntas();
    }   
}


//criar quizz: perguntas
const perguntasCorpo = [
    `
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
                        <input class="pergunta${i+1} url-img-resp-incorreta2" type="text" placeholder="URL da imagem 2">
                    </div>
                    <div class="box-inputs">
                        <input class="pergunta${i+1} resposta-incorreta3" type="text" placeholder="Resposta incorreta 3">
                        <input class="pergunta${i+1} url-img-resp-incorreta3" type="text" placeholder="URL da imagem 3">
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

    let checagemPerguntas = true

    for(let i = 0; i < todasPerguntas.length; i++) {
        let pergunta = todasPerguntas[i].value;
        if (pergunta.length < 20) {
            alert('As perguntas devem ter 20 caracteres no mínimo, por favor preencha as informações pedidas corretamente');
            checagemPerguntas = false;
            break;
        } else {
           objetoQuizz.questions[i].title = pergunta;
        }
    }
    for(let i = 0; i < todasCores.length; i++) {
        let corfundo = todasCores[i].value;
        if (corfundo.length != 7 || corfundo[0] !== '#') {
            alert('As cores de fundo devem estar em formato hexadecimal, por favor preencha as informações pedidas corretamente');
            checagemPerguntas = false;
            break;
        } else {
            objetoQuizz.questions[i].color = corfundo;
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
            checagemPerguntas = false;
            break; 
        } else {
            objetoQuizz.questions[i].answers[0].image = urlImg;
            
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
            checagemPerguntas = false;
            break; 
        } else {
            objetoQuizz.questions[i].answers[1].image = urlImg;
        }
    }
    for(let i = 0; i < respostasCorretas.length; i++) {
        let respCorreta = respostasCorretas[i].value;
        if (respCorreta == null || respCorreta == undefined) {
            alert('As respostas corretas não podem estar em branco, por favor preencha as informações pedidas corretamente');
            checagemPerguntas = false;
            break;
        } else {
            objetoQuizz.questions[i].answers[0].text = respCorreta;
            objetoQuizz.questions[i].answers[0].isCorrectAnswer = true;
        }
    }
    for(let i = 0; i < respostasErradas1.length; i++) {
        let respErrada1 = respostasErradas1[i].value;
        if(respErrada1 == null || respErrada1 == undefined) {
            alert('É necessário ter ao menos uma resposta incorreta, por favor preencha as informações pedidas corretamente');
            checagemPerguntas = false;
            break; 
        } else {
            objetoQuizz.questions[i].answers[1].text = respErrada1;
            objetoQuizz.questions[i].answers[1].isCorrectAnswer = false;
        }
    }

    console.log(checagemPerguntas);
    puxarRespostasIncorretas(checagemPerguntas);
    console.log(checagemPerguntas);
    
}

function puxarRespostasIncorretas(checagemPerguntas) {
    let respostasErradas2 = document.querySelectorAll('.resposta-incorreta2');
    let imagensRErradas2 = document.querySelectorAll('.url-img-resp-incorreta2');
    
    let respostasErradas3 = document.querySelectorAll('.resposta-incorreta3');
    let imagensRErradas3 = document.querySelectorAll('.url-img-resp-incorreta3')
    console.log(imagensRErradas3, 'abobrinha');
    
    for (i = 0; i < respostasErradas2.length; i++) {
        let respIncorreta = respostasErradas2[i].value;
        let imgRErrada = imagensRErradas2[i].value;
        
        let url = '';
        
        for (let j = 0; j < 8; j++) {
            url += imgRErrada[j];
        }
        if (respIncorreta != null && url != 'https://') {
            alert('Por favor, todas as imagens devem estar em formato URL');
            checagemPerguntas = false;
            break;   
        } else if (respIncorreta == null && url != null) {
            alert('Por favor, garanta que todas as respostas foram preenchidas apropriadamente.')
            checagemPerguntas = false;
            break;
        } else {
            objetoQuizz.questions[i].answers[2].text = respIncorreta;
            objetoQuizz.questions[i].answers[2].isCorrectAnswer = false;
            objetoQuizz.questions[i].answers[2].image = imgRErrada;
        }
    }
    
    for (i = 0; i < respostasErradas3.length; i++) {
        let respIncorreta = respostasErradas3[i].value;
        let imgRErrada = imagensRErradas3[i].value;
        
        let url = '';
        
        for (let j = 0; j < 8; j++) {
            url += imgRErrada[j];
        }   
            console.log(respIncorreta);
            console.log(url);
        if (respIncorreta != null && url != 'https://') {
            alert('Por favor, todas as imagens devem estar em formato URL');
            checagemPerguntas = false;
            break; 

        } else if(respIncorreta == null && url != null) {
            alert('Por favor, garanta que todas as respostas foram preenchidas apropriadamente.')
            checagemPerguntas = false;
            break;
        } else {
            objetoQuizz.questions[i].answers[3].text = respIncorreta;
            objetoQuizz.questions[i].answers[3].isCorrectAnswer = false;
            objetoQuizz.questions[i].answers[3].image = imgRErrada;  
        }
    }
    

    if(checagemPerguntas == true) {
        definirNiveis();
    }
}

//criar quizz: níveis
const niveisCorpo = [
    `<div class="cabecalho">BuzzQuizz</div>
    <div class="instrucoes-criacao">Agora, decida os níveis!</div>
    <div class="container-niveis"></div>   
    <button onclick="checarNiveis()" class="botao-avancar"><p>Finalizar Quizz</p></button>`    
]

function definirNiveis() {
    corpoInteiro.innerHTML = niveisCorpo;
    let containerNiveis = document.querySelector('.container-niveis');
    for (let i = 0; i < numNiveis; i++) {
        const niveisBase = [
            `<div class="nivel${i+1} box-nivel">
                <div class="nivel${i+1} nivel-visivel escondido">
                    <div class="box-inputs">
                        <p>Nível ${i+1}</p>
                        <input class="nivel${i+1} titulo-nivel" type="text" placeholder="Título do nível">
                        <input class="nivel${i+1} acerto-minimo" type="text" placeholder="% de acerto mínima">
                        <input class="nivel${i+1} url-imagem-nivel" type="text" placeholder="URL da imagem do nível">
                        <textarea name="descricaoNivel" class="nivel${i+1} descricao-nivel" placeholder="Descrição do nível"></textarea>
                    </div>   
                </div>
                <div class="nivel${i+1} nivel-colapsado">
                    <p>Nível ${i+1}</p>
                    <ion-icon class="nivel${i+1} botao-editar" onclick="mostrarNivel(this.parentNode)" name="create-outline"></ion-icon>
                </div>
            </div>`
        ]
        containerNiveis.innerHTML += niveisBase;
    }

    let nivelVisivel1 = document.querySelector('.nivel1 .nivel-visivel');
    nivelVisivel1.classList.remove('escondido');
    
    let nivelColapsado1 = document.querySelector('.nivel1 .nivel-colapsado');
    nivelColapsado1.classList.add('escondido');
}

function mostrarNivel(nColapsado) {
    let nVisivel = nColapsado.previousElementSibling
    
    let todosVisiveis = document.querySelectorAll('.nivel-visivel');
    for(let i = 0; i < todosVisiveis.length; i++) {
        todosVisiveis[i].classList.add('escondido');
    }

    let todosColapsados = document.querySelectorAll('.nivel-colapsado');
    for(let i = 0; i < todosColapsados.length; i++) {
        todosColapsados[i].classList.remove('escondido');
    }

    nColapsado.classList.add('escondido');
    nVisivel.classList.remove('escondido');
}

function checarNumCaracteres(array, numMinimo, alerta) {
    for (let i = 0; i < array.length; i++) {
        let string = array[i].value
        if ( string.length < numMinimo) {
            alert(alerta); 
            passouOsTestes = false;
            break;
        } 
    }
    
}
function checarValorNumero(array, alerta) {
    let arrayValores = [];
    for (i = 0; i < array.length; i++) {
        let porcentagem = parseFloat(array[i].value)
        arrayValores.push(String(porcentagem))
        if(porcentagem < 0 || porcentagem > 100) {
            alert(alerta);
            passouOsTestes = false;
            break;
        } 
    }
    if (arrayValores.includes('0') == false && array.length != arrayValores.length) {
        passouOsTestes = false;
        alert(alerta);
    } 
   
    
}
function checarURL(array, alerta) {
    for(i = 0; i < array.length; i++) {
        let urlComparaçao = '';
        let url = array[i].value;
        for (j = 0; j < 8; j++) {
            urlComparaçao += url[j];
        }
        if (urlComparaçao != 'https://') {
            alert(alerta);
            passouOsTestes = false;
            break;
        }
    }
}
function enviarTituloNivelParaObjeto(arrayTitulos) {
    for(i = 0; i < arrayTitulos.length; i++) {
        let titulo = arrayTitulos[i].value;
        objetoQuizz.levels[i].title = titulo;
    }
}
function enviarImagemNivelParaObjeto(arrayImagens) {
    for(i = 0; i < arrayImagens.length; i++) {
        let imagem = arrayImagens[i].value;
        objetoQuizz.levels[i].image = imagem;
    }
}
function enviarTextoNivelParaObjeto(arrayTextos) {
    for(i = 0; i < arrayTextos.length; i++) {
        let texto = arrayTextos[i].value;
        objetoQuizz.levels[i].text = texto;
    }
}
function enviarPorcentagemNivelParaObjeto(arrayPorcentagem) {
    for(i = 0; i < arrayPorcentagem.length; i++) {
        let porcentagem = parsefloat(arrayPorcentagem[i].value);
        objetoQuizz.levels[i].minValue = porcentagem;
    }
}

let passouOsTestes = true
function checarNiveis(){
    let alertaTitulo = "O título deve conter no mínimo 10 caracteres, por favor, preencha as informações pedidas corretamente";
    let alertaPorcentagem = 'A porcentagem deve ser um número positivo de 0 a 100 e pelo menos um nível deve ter a porcentagem de 0%, por favor, preencha as informações pedidas corretamente';
    let alertaURL = "A imagem deve estar em formato de URL, por favor, preencha as informações pedidas corretamente"
    let alertaDescricao = "A descrição dos níveis deve ter no mínimo 30 caracteres, por favor, preencha as informações pedidas corretamente"
    
    let todosTitulosNiveis = document.querySelectorAll('.titulo-nivel');
    let todasPorcentagensNiveis = document.querySelectorAll('.acerto-minimo');
    let todasURLSNiveis = document.querySelectorAll('.url-imagem-nivel');
    let todasDescricoes = document.querySelectorAll('.descricao-nivel');

    checarNumCaracteres(todosTitulosNiveis, 10, alertaTitulo);
    checarValorNumero(todasPorcentagensNiveis, alertaPorcentagem);
    checarURL(todasURLSNiveis, alertaURL);
    checarNumCaracteres(todasDescricoes, 30, alertaDescricao)

    if (passouOsTestes == true) {
        enviarTituloNivelParaObjeto(todosTitulosNiveis);
        enviarImagemNivelParaObjeto(todasURLSNiveis);
        enviarTextoNivelParaObjeto(todasDescricoes);
        enviarPorcentagemNivelParaObjeto(todasPorcentagensNiveis);
        console.log(objetoQuizz);
        //funçao fim do quizz
    }
}



