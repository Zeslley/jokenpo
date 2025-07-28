const optionImages = document.querySelectorAll('.option-image');
const container = document.querySelector('.container');
const resultText = document.querySelector('.result-text');
const computerImg =['img/pedra.png', 'img/papel.png', 'img/tesoura.png']; 


function handleOptionClick(event) {
    const  clickedImage = (event.currentTarget)

    container.classList.add('start');
    resultText.textContent = 'Pensando...';

    setTimeout(() => {
        container.classList.remove('start')

        const randomNumber = Math.floor(Math.random() * computerImg.length);


        resultText.textContent = "X ganhou!"
    }, 2000);
}

optionImages.forEach( img => {
    img.addEventListener('click', handleOptionClick); 
})