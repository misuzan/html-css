// Seleciona o botão pelo seu ID
const button = document.getElementById('changeColorButton');

// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para mudar a cor de fundo
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener('click', changeBackgroundColor);
