let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, slideIndex) => {
    slide.style.display = slideIndex === index ? 'block' : 'none';
  });
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
  resetSlideInterval();
}

function nextSlide() {
  changeSlide(1);
}

function zoomImage(imageUrl) {
  window.open(imageUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  document.querySelectorAll('[data-slide-direction]').forEach((button) => {
    button.addEventListener('click', () => {
      changeSlide(Number(button.dataset.slideDirection));
    });
  });

  document.querySelectorAll('[data-zoom]').forEach((button) => {
    button.addEventListener('click', () => {
      zoomImage(button.dataset.zoom);
    });
  });

  showSlide(currentSlide);
  slideInterval = setInterval(nextSlide, 3000);
});
