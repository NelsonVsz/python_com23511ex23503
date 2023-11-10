const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const next = document.querySelector('.carousel-control-next');
const prev = document.querySelector('.carousel-control-prev');
let currentIndex = 0;

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

function updateCarousel() {
    const translateX = currentIndex * -100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

updateCarousel();
