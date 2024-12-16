//--Funções--

function quantidadeRestante() {
    const selecao = document.getElementById('tipo-ingresso');
    const opcaoSelecionada = selecao.options[selecao.selectedIndex].value;
    const selecaoCadeira = document.getElementById(`qtd-${opcaoSelecionada}`);
    const valorRestante = parseInt(selecaoCadeira.textContent);
    return { valorRestante, selecaoCadeira };
}

function comprar() {
    const quantidadeDesejada = parseInt(document.getElementById("qtd").value);
    const { valorRestante, selecaoCadeira } = quantidadeRestante();

    if (quantidadeDesejada <= valorRestante) {
        const novoValorRestante = valorRestante - quantidadeDesejada;
        selecaoCadeira.textContent = novoValorRestante;
    } else {
        alert('Verifique o valor restante de ingressos e tente novamente.');
    }
}
