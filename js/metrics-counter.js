// Métricas da Faixa de dados - Animação dos contadores

const counters = document.querySelectorAll(".numero");

const animateCounter = (counter) => {
  const target = +counter.dataset.num;
  let current = 0;

  const step = Math.max(1, Math.floor(target / 60));

  const update = () => {
    current += step;
    if (current >= target) {
      counter.textContent = target + "+";
    } else {
      counter.textContent = current;
      requestAnimationFrame(update);
    }
  };

  update();
};

const metricsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll(".numero");
      nums.forEach(animateCounter);
      metricsObserver.disconnect(); // só roda uma vez
    }
  });
}, { threshold: 0.4 });

const metricsSection = document.querySelector(".faixa-metricas");
if (metricsSection) metricsObserver.observe(metricsSection);
