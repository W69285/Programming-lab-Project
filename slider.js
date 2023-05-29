const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.clientWidth;
let currentIndex = 0;

// Function to slide to the next image
function slideNext() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Function to slide to the previous image
function slidePrev() {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Event listeners for next and previous buttons
document.querySelector('.next').addEventListener('click', slideNext);
document.querySelector('.prev').addEventListener('click', slidePrev);