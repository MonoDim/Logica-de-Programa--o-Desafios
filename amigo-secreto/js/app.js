//--Funções--

//--Créditos da função para (https://pt.stackoverflow.com/users/5878/woss) que usou
//--o super cérebro dele para pensar algo que não fui capaz.
function pares(nomes) {
    const _pairs = [];
    const _nomes = [...nomes];
    _nomes.sort(() => Math.random() - 0.5);
    for (let i = 0; i < _nomes.length; i++) {
        _pairs.push([_nomes[i], _nomes[(i != _nomes.length - 1) ? i + 1 : 0]]);
    }
    return _pairs;
};

const nomes = [ ];

function sortear() {
    console.log(pares(nomes));
}

//--Teste