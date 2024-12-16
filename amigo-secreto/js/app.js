//--Funções--

//--Créditos da função para (https://pt.stackoverflow.com/users/5878/woss) que usou
//--o super cérebro dele para pensar algo que não fui capaz.
function pares(nomes) {
    const _pares = [];
    const _nomes = [...nomes];
    _nomes.sort(() => Math.random() - 0.5);
    for (let i = 0; i < _nomes.length; i++) {
        _pares.push([_nomes[i], _nomes[(i !== _nomes.length - 1) ? i + 1 : 0]]);
    }
    return _pares;
}

const nomes = [];

function adicionar() {
    const inputElement = document.getElementById('nome-amigo');
    const nome = inputElement.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        console.log(`Nome ${nome} adicionado!`);
        const listaAmigos = document.getElementById('lista-amigos');
        listaAmigos.textContent = nomes.join(", ");
    } else {
        alert("Por favor, insira um nome válido!");
    }

    inputElement.value = "";
}

function sortear() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    const resultado = pares(nomes);
    const listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = resultado.map(par => `${par[0]} ➡️ ${par[1]}`).join("<br>");
    console.log(resultado);
}

function reiniciar() {
    nomes.length = 0;
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').innerHTML = "";
    console.log("Amigos e sorteios reiniciados!");
}

document.getElementById('nome-amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionar();
    }
});
