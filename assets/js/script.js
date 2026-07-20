const hamburger = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const firstMenuLink = mobileMenu.querySelector("a");

// obsluha otevření menu
function openMenu() {
  mobileMenu.hidden = false;
  mobileMenu.classList.add("is-open");

  hamburger.setAttribute("aria-expanded", "true");
  hamburger.setAttribute("aria-label", "Close menu");

  firstMenuLink?.focus();
}

function closeMenu(returnFocus = true) {
  mobileMenu.classList.remove("is-open");
  mobileMenu.hidden = true;

  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");

  if (returnFocus) {
    hamburger.focus();
  }
}

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// zavření klávesou Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    hamburger.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
  }
});

// zavření po kliknutí na odkaz
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu(false);
  });
});
