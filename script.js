const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está jogando um novo jogo que usa realidade aumentada para criar uma experiência imersiva. Qual o seu pensamento inicial?",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "Ficou empolgado com a inovação e a possibilidade de jogar em um ambiente mais interativo."
            },
            {
                texto: "Isso é muito estranho!",
                afirmacao: "Sentiu-se desconfortável com a tecnologia e preferiu manter os jogos tradicionais."
            }
        ]
    },
    {
        enunciado: "Após algumas semanas jogando, um amigo te convida para participar de um torneio de eSports. Como você reage?",
        alternativas: [
            {
                texto: "Aceita o convite e começa a treinar intensamente para competir.",
                afirmacao: "Você se dedica ao treinamento e se engaja na comunidade de eSports, vendo isso como uma nova forma de se conectar com outros jogadores."
            },
            {
                texto: "Agradece o convite, mas decide que prefere assistir ao torneio como espectador.",
                afirmacao: "Você se sente mais confortável como espectador e aprecia a experiência de assistir ao torneio ao invés de competir."
            }
        ]
    },
    {
        enunciado: "Durante o torneio, você percebe que a equipe adversária está usando estratégias inovadoras. Como você se sente?",
        alternativas: [
            {
                texto: "Fascinado e inspirado para aprender novas estratégias.",
                afirmacao: "Você vê a inovação como uma oportunidade de crescimento e se inspira a melhorar suas próprias habilidades."
            },
            {
                texto: "Frustrado e desanimado com a dificuldade.",
                afirmacao: "Você se sente desencorajado pela diferença nas estratégias e precisa encontrar formas de se motivar novamente."
            }
        ]
    },
    {
        enunciado: "Depois do torneio, você decide criar um canal para compartilhar suas experiências e dicas sobre jogos e eSports. Qual é sua abordagem?",
        alternativas: [
            {
                texto: "Compartilhar dicas e truques sobre estratégias e técnicas que você aprendeu.",
                afirmacao: "Você se dedica a ajudar outros jogadores a melhorar, compartilhando suas estratégias e insights."
            },
            {
                texto: "Focar em análises e críticas sobre os jogos e eventos que você assistiu.",
                afirmacao: "Você se concentra em oferecer análises detalhadas e críticas construtivas para a comunidade."
            }
        ]
    },
    {
        enunciado: "Você recebe uma proposta para se tornar um comentarista em um canal de eSports. O que você faz?",
        alternativas: [
            {
                texto: "Aceita a proposta e começa a preparar-se para a nova função.",
                afirmacao: "Você está animado com a oportunidade e se dedica a se preparar para oferecer comentários interessantes e informativos."
            },
            {
                texto: "Recusa a proposta, preferindo continuar focado na criação de conteúdo próprio.",
                afirmacao: "Você decide permanecer com sua abordagem atual, valorizando a autonomia e o controle sobre seu próprio conteúdo."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
}

// Inicializa o quiz
mostraPergunta();
