const optionImages = document.querySelectorAll('.option-image');

function handleOptionClick(event) {
    const  clickedImage = (event.currentTarget)
}

optionImages.forEach( img => {
    img.addEventListener('click', handleOptionClick); 
})