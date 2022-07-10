const slides = document.querySelector('.slide');

// Init Slides
const quantitySlide = 4;
slides.style.width = `${4 * 100}%`

// Index Slide
let slideIndex = 0;

// move Slides Container
const moveSlidesContainer = () => {
    slides.style.left = `-${slideIndex * 100}%`; 
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