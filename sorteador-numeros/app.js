// Funções

function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const min = parseInt(document.getElementById('de').value);
    const max = parseInt(document.getElementById('ate').value);

    if (quantidade > (max - min + 1)) {
        alert("Erro: A quantidade de números solicitada é maior do que o intervalo disponível.");
        return;
    }

    const numerosSorteados = [];
    while (numerosSorteados.length < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosSorteados.includes(numeroAleatorio)) {
            numerosSorteados.push(numeroAleatorio);
        }
    }

    numerosSorteados.sort((a,b) => a - b);

    alterarEstadoBotao('ativar');
    const textoBase = numerosSorteados.length === 1 
        ? `O número sorteado foi: ${numerosSorteados}` 
        : `Os números sorteados foram: ${numerosSorteados}`;
    exibirTexto('.texto__paragrafo__final', textoBase);
}

function reiniciar() {
    alterarEstadoBotao('desativar');
    limparCampos();
    exibirTexto('.texto__paragrafo__final', "Os números ainda não foram sorteados.");
}

function limparCampos() {
    ['quantidade', 'de', 'ate'].forEach(id => document.getElementById(id).value = '');
}

function alterarEstadoBotao(acao) {
    const botao = document.getElementById('btn-reiniciar');
    const estadoAtivo = 'container__botao';
    const estadoDesativado = 'container__botao-desabilitado';

    if (acao === 'ativar') {
        botao.classList.add(estadoAtivo);
        botao.classList.remove(estadoDesativado);
    } else if (acao === 'desativar') {
        botao.classList.add(estadoDesativado);
        botao.classList.remove(estadoAtivo);
    }
}

function exibirTexto(seletor, novoTexto) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
        elemento.textContent = novoTexto;
    } else {
        console.warn(`Elemento com o seletor "${seletor}" não encontrado.`);
    }
}

// Inicialização do texto padrão
exibirTexto('.texto__paragrafo__final', "Os números ainda não foram sorteados.");
