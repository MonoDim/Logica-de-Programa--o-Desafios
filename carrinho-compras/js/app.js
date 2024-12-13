//--Variáveis--
let carrinho = [];
let valorTotal = 0;

//--Funções--
function nomePrecoQuant() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const selecao = document.getElementById('produto');
    const opcaoSelecionada = selecao.options[selecao.selectedIndex].text;
    const nome = opcaoSelecionada.split(" - ")[0];
    const preco = parseInt(opcaoSelecionada.split("R$")[1]);

    return { nome, preco, quantidade };
}

function trocarImg() {
    const { nome } = nomePrecoQuant();
    const conteudoPrincipal = document.querySelector('.conteudo-principal');
    conteudoPrincipal.style.backgroundImage = `url('./assets/${nome}.png')`;
}

function selecionar() {
    const { quantidade, nome, preco } = nomePrecoQuant();
    if (validarQuantidade(quantidade)) return;

    exibirTexto('span.texto-medio-azul-abaixo', `${quantidade}x ${nome}`);

    carrinho = adicionarCarrinho(quantidade, nome, preco, carrinho);
    valorTotal += preco * quantidade;
    atualizarValorTotal();
    adicionarProdutoLista(quantidade, nome, preco);
}

function limpar() {
    valorTotal = 0;
    carrinho = [];
    console.log(carrinho);
    atualizarValorTotal();
    limparListaProdutos();
}

function adicionarCarrinho(quantidade, nome, preco, carrinho) {
    carrinho.push({ quantidade, nome, preco });
    return carrinho;
}

function validarQuantidade(quantidade) {
    if (isNaN(quantidade) || quantidade <= 0) {
        exibirTexto('span.texto-medio-azul-abaixo', "Insira uma quantidade válida!");
        return true; // Retorna true para indicar erro
    }
    return false;
}

function atualizarValorTotal() {
    exibirTexto('#valor-total', `R$${valorTotal}`);
}

function adicionarProdutoLista(quantidade, nome, preco) {
    const produtos = document.getElementById('lista-produtos');
    const produtoElemento = document.createElement('section');
    produtoElemento.classList.add('carrinho__produtos__produto');
    produtoElemento.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>`;
    produtos.appendChild(produtoElemento);
}

function limparListaProdutos() {
    const produtos = document.getElementById('lista-produtos');
    produtos.innerHTML = ''; // Limpa a lista de produtos
}

function exibirTexto(seletor, novoTexto) {
    const elemento = document.querySelector(seletor);
    elemento.textContent = novoTexto;
}
