//Iniciar

//Variaveis

let numerosSorteados = [];
let textoSingular = 'O numero sorteado foi: ';
let textoPlural = 'Os numeros sorteados foram: ';

//Funções

function sortear() {
    let numerosSorteados = [];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let min = parseInt(document.getElementById('de').value);
    let max = parseInt(document.getElementById('ate').value);
   
    if (quantidade > (max - min + 1)) {
        alert("Erro: A quantidade de números solicitada é maior do que o intervalo disponível.");
        return;
    };
   
    while (quantidade > 0) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        if (numerosSorteados.includes(numeroAleatorio)) {
            continue;
        };
        numerosSorteados.push(numeroAleatorio);
        quantidade--;
    };
    console.log(numerosSorteados);
    botaoAtivo();
    if (numerosSorteados.length == 1) {
        exibirTexto('.texto__paragrafo__final',`${textoSingular}${numerosSorteados}`);
    } else {
        exibirTexto('.texto__paragrafo__final',`${textoPlural}${numerosSorteados}`);

    };
};

function reiniciar() {
    botaoDesativo();
    limparCampo();
    exibirTexto('.texto__paragrafo__final', `Os numeros ainda nao foram sorteados.`);
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function botaoAtivo() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
};

function botaoDesativo() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
};

function exibirTexto(seletor, novoTexto) {
    const elemento = document.querySelector(seletor);
    elemento.innerHTML = novoTexto;
};

//TextoHTML
exibirTexto('.texto__paragrafo__final', `Os numeros ainda nao foram sorteados.`);
