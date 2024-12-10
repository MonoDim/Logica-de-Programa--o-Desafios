// Funções

function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const min = parseInt(document.getElementById('de').value);
    const max = parseInt(document.getElementById('ate').value);

    //--Verifica se o minimo bate com o maximo--
    if (quantidade > (max - min + 1)) {
        alert("Erro: A quantidade de números solicitada é maior do que o intervalo disponível.");
        return;
    }

    const numerosSorteados = [];
    //--Gera um numero aleatorio e verifica se ele ja esta na lista para nao vir repitido--
    while (numerosSorteados.length < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosSorteados.includes(numeroAleatorio)) {
            numerosSorteados.push(numeroAleatorio);
        }
    }
    //--Organiza a lista em ordem--
    numerosSorteados.sort((a,b) => a - b);

    //--Ativa o botao de reiniciar ao mesmo tempo que verifica se a
    //frase vai ser no plural ou no singular--
    alterarEstadoBotao('ativar');
    const textoBase = numerosSorteados.length === 1 
        ? `O número sorteado foi: ${numerosSorteados}` 
        : `Os números sorteados foram: ${numerosSorteados}`;
    exibirTexto('.texto__paragrafo__final', textoBase);
}

//--Reinicia o jogo--
function reiniciar() {
    alterarEstadoBotao('desativar');
    limparCampos();
    exibirTexto('.texto__paragrafo__final', "Os números ainda não foram sorteados.");
}

//--Limpa os campos que ja tinham algo escrito--
function limparCampos() {
    ['quantidade', 'de', 'ate'].forEach(id => document.getElementById(id).value = '');
}

//--Verifica o estado do botão (Ativo ou Desativado) para poder tratar dele--
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

//--Função para exibir texto no HTML--
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
