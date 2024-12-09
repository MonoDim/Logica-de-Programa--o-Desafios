//Variaveis

let numerosSorteados = [];


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
}

//TextoHTML