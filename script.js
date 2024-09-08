// Obtendo referências aos botões e elementos necessários
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

// Variáveis para controlar o índice do item ativo
let active = 0;
const firstPosition = 0;
const lastPosition = items.length - 1;

function setslider() {

    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = 0 + (active + 1)
}
// Função para mostrar o próximo item
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setslider()
    items[active].classList.add('active')
}

// Função para mostrar o item anterior
prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setslider()
    items[active].classList.add('active');
}
