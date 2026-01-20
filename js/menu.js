// js/menu.js
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  // abre/fecha menu
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    toggle.classList.toggle("is-open");
  });

  // fecha ao clicar em qualquer link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      toggle.classList.remove("is-open");
    });
  });
})();

// Back to Top button //
const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

// Smooth scroll to top

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();

      const target = document.querySelector(targetId);
      if (!target) return;

      const startPosition = window.pageYOffset;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;

      const duration = 1600; // quanto maior, mais suave
      let startTime = null;

      function easeInOutCubic(t) {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(
          0,
          startPosition + distance * easeInOutCubic(progress)
        );

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  });
});

// Navbar Scroll js
const header = document.querySelector(".header");
const heroSection = document.querySelector("#home");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      header.classList.add("header-floating");
      header.classList.remove("header-solid");
    } else {
      header.classList.add("header-solid");
      header.classList.remove("header-floating");
    }
  },
  {
    threshold: 0.6,
  }
);

observer.observe(heroSection);


