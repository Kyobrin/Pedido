const container = document.querySelector(".container");
const pergunta = document.querySelector(".pergunta");
const gif = document.querySelector(".gif");
const sim = document.querySelector(".sim-btn");
const nao = document.querySelector(".nao-btn");

sim.addEventListener('click', () => {
    pergunta.innerHTML = 'BOM MESMO VADIA!!!!'
    gif.src ="https://media.giphy.com/media/wMQX4lLIYRTKE/giphy.gif"
})


nao.addEventListener('mouseover', () => {
    const naoRect = nao.getBoundingClientRect();
    const maximoX = window.innerWidth - naoRect.width;
    const maximoY = window.innerHeight - naoRect.width;
    const randomX = Math.floor(Math.random() * maximoX);
    const randomY = Math.floor(Math.random() * maximoY);


    nao.style.left = randomX + 'px';
    nao.style.top = randomY + 'px';
})


