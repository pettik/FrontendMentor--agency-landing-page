const hamburger = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");

  const isOpen = mobileMenu.classList.contains("is-open");
  hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Zavřít menu kliknutím na odkaz
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
});

// Zavřít mobilní menu při přechodu na tablet/desktop view
const breakpoint = window.matchMedia("(min-width: 768px)");

breakpoint.addEventListener("change", (e) => {
  if (e.matches) {
    mobileMenu.classList.remove("is-open");
    hamburger.setAttribute("aria-label", "Open menu");
  }
});
