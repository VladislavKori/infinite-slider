const slides = document.querySelector('.slide');

console.log()

// Init Slides
const quantitySlide = document.querySelectorAll('.slide__container').length;
slides.style.width = `${quantitySlide * 100}%`

// Index Slide
let slideIndex = 0;

// move Slides Container
const moveSlidesContainer = () => {
    slides.style.transform = `translateX(-${slideIndex * (100/quantitySlide)}%)`; 
}

// move Handler
const moveHandler = (direction) => {
    if (slideIndex+1 === quantitySlide && direction === 'right' ) {slideIndex = 0; return moveSlidesContainer()}; 
    if (slideIndex === 0 && !direction ) {slideIndex = quantitySlide - 1; return moveSlidesContainer()};
    direction === 'right' ? slideIndex += 1 : slideIndex -= 1;
    moveSlidesContainer();
}

// Buttons
document.querySelector('.next').addEventListener('click', e => {
    moveHandler('right')
})

document.querySelector('.previos').addEventListener('click', e => {
    moveHandler()
})

setInterval( () => {
    moveHandler('right')
}, 2000)