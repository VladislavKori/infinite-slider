const carousel = document.querySelector(".slider");
const slider = document.querySelector(".slide");
const slideContainer = document.querySelectorAll(".slide__container");
let direction = -1;

// Init Slides
const quantitySlide = slideContainer.length;
slider.style.width = `${quantitySlide * 100}%`;

const shiftProcent = 100 / quantitySlide;

// Buttons
document.querySelector(".next").addEventListener("click", (e) => {
  // Меняем направление
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = `translate(-${shiftProcent}%)`;
});

document.querySelector(".previos").addEventListener("click", (e) => {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = `translate(${shiftProcent}%)`;
});

slider.addEventListener(
  "transitionend",
  function () {
    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s";
    });
  },
  false
);

window.onload = () => {
  slider.style.display = 'flex'
}