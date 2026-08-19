/* =========================================
   QUIZ DE EDUCAÇÃO FINANCEIRA
   JavaScript + DOM
========================================= */


/* =========================================
   BANCO DE PERGUNTAS
========================================= */

const perguntas = [

    {
        pergunta: "O que é educação financeira?",

        alternativas: [
            "Gastar todo o dinheiro recebido.",
            "Aprender a administrar o dinheiro de maneira consciente e responsável.",
            "Comprar somente produtos caros.",
            "Evitar qualquer tipo de compra."
        ],

        correta: 1,

        explicacao:
            "Educação financeira envolve conhecimentos e hábitos que ajudam uma pessoa a organizar seus recursos, controlar gastos, planejar objetivos e tomar decisões financeiras conscientes."
    },


    {
        pergunta: "Qual é uma boa maneira de controlar os gastos?",

        alternativas: [
            "Ignorar pequenas despesas.",
            "Comprar sempre que houver uma promoção.",
            "Registrar e acompanhar receitas e despesas.",
            "Utilizar o cartão de crédito sem estabelecer limites."
        ],

        correta: 2,

        explicacao:
            "Registrar as receitas e despesas permite identificar para onde o dinheiro está indo e ajuda a organizar melhor o orçamento."
    },


    {
        pergunta: "O que é uma reserva financeira?",

        alternativas: [
            "Dinheiro separado para situações futuras ou emergenciais.",
            "Dinheiro destinado exclusivamente ao lazer.",
            "Um empréstimo bancário.",
            "Uma dívida que será paga posteriormente."
        ],

        correta: 0,

        explicacao:
            "A reserva financeira é uma quantia guardada para ajudar em situações inesperadas ou para alcançar objetivos futuros."
    },


    {
        pergunta: "O que pode acontecer quando uma pessoa gasta mais do que recebe?",

        alternativas: [
            "Ela automaticamente aumenta sua renda.",
            "Pode acabar acumulando dívidas.",
            "Ela sempre economiza dinheiro.",
            "Seus gastos diminuem automaticamente."
        ],

        correta: 1,

        explicacao:
            "Quando os gastos são maiores que a renda, a pessoa pode precisar recorrer ao crédito ou a empréstimos, aumentando o risco de endividamento."
    },


    {
        pergunta: "Antes de comprar um produto parcelado, é importante:",

        alternativas: [
            "Observar somente o valor da parcela.",
            "Verificar apenas se a primeira parcela cabe no orçamento.",
            "Analisar o custo total e as condições do pagamento.",
            "Escolher sempre o maior número possível de parcelas."
        ],

        correta: 2,

        explicacao:
            "Uma parcela aparentemente pequena pode resultar em um valor total elevado. Por isso, é importante analisar o custo total da compra e as condições do pagamento."
    },


    {
        pergunta: "O consumo consciente significa:",

        alternativas: [
            "Nunca comprar nada.",
            "Comprar tudo o que estiver em promoção.",
            "Comprar considerando necessidades, possibilidades financeiras e consequências.",
            "Utilizar todo o salário antes do final do mês."
        ],

        correta: 2,

        explicacao:
            "Consumo consciente significa refletir antes de comprar e avaliar se determinado gasto é necessário e compatível com o orçamento."
    },


    {
        pergunta: "Qual atitude pode ajudar no planejamento financeiro?",

        alternativas: [
            "Não acompanhar os gastos.",
            "Estabelecer objetivos financeiros.",
            "Fazer compras por impulso.",
            "Utilizar todo o limite do cartão."
        ],

        correta: 1,

        explicacao:
            "Definir objetivos, como economizar para uma viagem, curso ou emergência, ajuda a organizar as decisões financeiras."
    },


    {
        pergunta: "Por que é importante compreender os juros?",

        alternativas: [
            "Porque os juros não interferem nas compras.",
            "Porque eles podem aumentar o valor final de empréstimos e financiamentos.",
            "Porque todo produto possui o mesmo valor de juros.",
            "Porque juros existem somente em investimentos."
        ],

        correta: 1,

        explicacao:
            "Os juros podem aumentar significativamente o valor que será pago em empréstimos, financiamentos e outras operações de crédito."
    },


    {
        pergunta: "Qual atitude é mais adequada antes de contratar um empréstimo?",

        alternativas: [
            "Aceitar a primeira oferta encontrada.",
            "Verificar somente o valor da parcela.",
            "Comparar taxas, custos, prazo e valor total a pagar.",
            "Escolher sempre o prazo mais longo."
        ],

        correta: 2,

        explicacao:
            "Comparar as condições permite compreender melhor o custo do crédito e avaliar se ele é compatível com o orçamento."
    },


    {
        pergunta: "Por que a educação financeira deve ser ensinada desde cedo?",

        alternativas: [
            "Para incentivar crianças a gastar dinheiro.",
            "Para desenvolver conhecimentos e hábitos que contribuam para decisões responsáveis no futuro.",
            "Para ensinar crianças a fazer empréstimos.",
            "Para substituir todas as disciplinas escolares."
        ],

        correta: 1,

        explicacao:
            "O contato com conceitos financeiros desde cedo pode ajudar crianças e jovens a desenvolver hábitos de planejamento, consumo consciente e responsabilidade."
    }

];


/* =========================================
   VARIÁVEIS DO QUIZ
========================================= */

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;


/* =========================================
   ELEMENTOS DO DOM
========================================= */

const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const btnIniciar = document.getElementById("btnIniciar");
const btnProxima = document.getElementById("btnProxima");
const btnReiniciar = document.getElementById("btnReiniciar");

const numeroPergunta = document.getElementById("numeroPergunta");
const pontuacaoElemento = document.getElementById("pontuacao");

const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");

const feedback = document.getElementById("feedback");
const feedbackTitulo = document.getElementById("feedbackTitulo");
const feedbackTexto = document.getElementById("feedbackTexto");

const barraProgresso = document.getElementById("barraProgresso");

const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const resultadoBarra = document.getElementById("resultadoBarra");

const acertosElemento = document.getElementById("acertos");
const errosElemento = document.getElementById("erros");
const percentualElemento = document.getElementById("percentual");

const mensagemResultado = document.getElementById("mensagemResultado");
const explicacaoResultado = document.getElementById("explicacaoResultado");


/* =========================================
   INICIAR QUIZ
========================================= */

btnIniciar.addEventListener("click", iniciarQuiz);


function iniciarQuiz() {

    perguntaAtual = 0;
    pontuacao = 0;
    respondeu = false;

    inicio.classList.add("escondido");

    resultado.classList.add("escondido");

    quiz.classList.remove("escondido");

    mostrarPergunta();
}


/* =========================================
   MOSTRAR PERGUNTA
========================================= */

function mostrarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    pontuacaoElemento.textContent =
        `Pontuação: ${pontuacao}`;

    atualizarBarraProgresso();

    alternativasElemento.innerHTML = "";

    feedback.classList.add("escondido");

    feedback.classList.remove("acerto", "erro");

    btnProxima.classList.add("escondido");


    /* =====================================
       CRIAR ALTERNATIVAS COM DOM
    ===================================== */

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${alternativa}`;

        botao.addEventListener("click", () => {

            verificarResposta(indice, botao);

        });

        alternativasElemento.appendChild(botao);

    });

}


/* =========================================
   VERIFICAR RESPOSTA
========================================= */

function verificarResposta(indiceEscolhido, botaoEscolhido) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    /* =====================================
       DESABILITAR ALTERNATIVAS
    ===================================== */

    botoes.forEach(botao => {

        botao.disabled = true;

    });


    /* =====================================
       VERIFICAR SE ESTÁ CORRETA
    ===================================== */

    if (indiceEscolhido === pergunta.correta) {

        pontuacao++;

        botaoEscolhido.classList.add("correta");

        mostrarFeedback(
            true,
            "✅ Resposta correta!",
            pergunta.explicacao
        );

    } else {

        botaoEscolhido.classList.add("incorreta");

        botoes[pergunta.correta].classList.add("correta");

        mostrarFeedback(
            false,
            "❌ Resposta incorreta!",
            `A resposta correta é: ${pergunta.alternativas[pergunta.correta]}. ${pergunta.explicacao}`
        );

    }


    pontuacaoElemento.textContent =
        `Pontuação: ${pontuacao}`;

    btnProxima.classList.remove("escondido");

}


/* =========================================
   MOSTRAR FEEDBACK
========================================= */

function mostrarFeedback(correto, titulo, texto) {

    feedback.classList.remove("escondido");

    feedback.classList.remove("acerto", "erro");

    if (correto) {

        feedback.classList.add("acerto");

    } else {

        feedback.classList.add("erro");

    }

    feedbackTitulo.textContent = titulo;

    feedbackTexto.textContent = texto;

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

btnProxima.addEventListener("click", proximaPergunta);


function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


/* =========================================
   BARRA DE PROGRESSO
========================================= */

function atualizarBarraProgresso() {

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    barraProgresso.style.width =
        `${progresso}%`;

}


/* =========================================
   MOSTRAR RESULTADO FINAL
========================================= */

function mostrarResultado() {

    quiz.classList.add("escondido");

    resultado.classList.remove("escondido");


    const totalPerguntas = perguntas.length;

    const erros = totalPerguntas - pontuacao;

    const percentual =
        Math.round((pontuacao / totalPerguntas) * 100);


    /* =====================================
       ATUALIZAR DOM
    ===================================== */

    pontuacaoFinal.textContent =
        `${pontuacao}/${totalPerguntas}`;

    acertosElemento.textContent =
        pontuacao;

    errosElemento.textContent =
        erros;

    percentualElemento.textContent =
        `${percentual}%`;


    resultadoBarra.style.width =
        `${percentual}%`;


    /* =====================================
       MENSAGENS PERSONALIZADAS
    ===================================== */

    if (percentual === 100) {

        mensagemResultado.textContent =
            "🏆 Excelente! Você domina o assunto!";

        explicacaoResultado.textContent =
            "Você demonstrou um ótimo conhecimento sobre educação financeira. Continue utilizando esse conhecimento para tomar decisões conscientes e responsáveis.";

    }

    else if (percentual >= 70) {

        mensagemResultado.textContent =
            "👏 Muito bem!";

        explicacaoResultado.textContent =
            "Você possui bons conhecimentos sobre educação financeira. Continue aprendendo para melhorar ainda mais sua relação com o dinheiro.";

    }

    else if (percentual >= 50) {

        mensagemResultado.textContent =
            "📚 Bom começo!";

        explicacaoResultado.textContent =
            "Você já possui alguns conhecimentos importantes, mas ainda pode aprender mais sobre planejamento, consumo consciente e organização financeira.";

    }

    else {

        mensagemResultado.textContent =
            "💡 Hora de aprender mais!";

        explicacaoResultado.textContent =
            "O resultado mostra que você pode aprender mais sobre educação financeira. Conhecimento é uma ferramenta importante para tomar decisões melhores no futuro.";

    }

}


/* =========================================
   REINICIAR QUIZ
========================================= */

btnReiniciar.addEventListener("click", reiniciarQuiz);


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    respondeu = false;

    resultado.classList.add("escondido");

    inicio.classList.remove("escondido");

    barraProgresso.style.width = "0%";

}


/* =========================================
   FIM DO PROGRAMA
=====================================
