// Toggle Sidebar Colapsable desde el botón interno
const sidebar = document.getElementById('sidebar');
const mainWrapper = document.getElementById('mainWrapper');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('mobile-open');
    } else {
        sidebar.classList.toggle('collapsed');
        mainWrapper.classList.toggle('expanded');
    }
});

// Carrusel Funcionalidad (Cambio cada 2 segundos + botones manuales)
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 20}%)`;
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

nextBtn.addEventListener('click', () => {
    moveToNextSlide();
    resetTimer();
});

prevBtn.addEventListener('click', () => {
    moveToPrevSlide();
    resetTimer();
});

let carouselTimer = setInterval(moveToNextSlide, 2000);

function resetTimer() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(moveToNextSlide, 2000);
}
