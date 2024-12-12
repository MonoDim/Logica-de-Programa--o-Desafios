//Funções

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let img = jogo.querySelector('.dashboard__item__img');
    let btn = jogo.querySelector('.dashboard__item__button');
    btn.classList.contains('dashboard__item__button--return') 
    ? retornarGame(img, btn)
    : algarGame(img, btn);
};

function algarGame(img,btn) {
    img.className = ('dashboard__item__img dashboard__item__img--rented');
    btn.className = ('dashboard__item__button dashboard__item__button--return');
    btn.innerText = ('Devolver');
};

function retornarGame(img,btn) {
    img.className = ('dashboard__item__img');
    btn.className = ('dashboard__item__button');
    btn.innerText = ('Alugar');
};