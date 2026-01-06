// --- Carrossel Presença Midiática ---
const track = document.querySelector(".midia-track");
const slides = document.querySelectorAll(".midia-slide");
const prevBtn = document.querySelector(".midia-prev");
const nextBtn = document.querySelector(".midia-next");
const dots = document.querySelectorAll(".midia-dot");

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

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

// reajusta posição ao redimensionar
window.addEventListener("resize", () => updateCarousel(currentIndex));

// inicializa
updateCarousel(currentIndex);


