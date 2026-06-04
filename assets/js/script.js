const hamburger = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  console.log("click");
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
