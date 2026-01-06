// --- Carrossel Presença Midiática ---
const track = document.querySelector(".midia-track");
const slides = document.querySelectorAll(".midia-slide");
const prevBtn = document.querySelector(".midia-prev");
const nextBtn = document.querySelector(".midia-next");
const dots = document.querySelectorAll(".midia-dot");
const AUTO_PLAY_DELAY = 5000; // 5 segundos


let autoplayInterval = null;
let currentIndex = 0;

function updateCarousel(index) {
  if (!track) return;
  const width = track.clientWidth; // largura total visível
  track.style.transform = `translateX(-${index * width}px)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === index);
  });
}

function goToSlide(index) {
  const total = slides.length;
  currentIndex = (index + total) % total;
  updateCarousel(currentIndex);
}

function startAutoplay() {
  stopAutoplay(); // evita múltiplos intervals
  autoplayInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, AUTO_PLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}


if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    startAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    startAutoplay();
  });
}


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
    startAutoplay();
  });
});


// reajusta posição ao redimensionar
window.addEventListener("resize", () => updateCarousel(currentIndex));


const carousel = document.querySelector(".midia-carousel");

if (carousel) {
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
}


// inicializa
updateCarousel(currentIndex); 
startAutoplay();

