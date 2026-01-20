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

