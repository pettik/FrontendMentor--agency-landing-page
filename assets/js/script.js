const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');

  const isOpen = mobileMenu.classList.contains('is-open');

  // Stav tlačítka pro screen readery
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

  // Skrytí/zobrazení pro screen readery
  mobileMenu.setAttribute('aria-hidden', !isOpen);

  // Přesun fokusu na první odkaz v menu
  if (isOpen) {
    const firstLink = mobileMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  }
});

// Zavřít menu kliknutím na odkaz
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  });
});

// Zavřít menu při Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    hamburger.focus(); // vrátit fokus na hamburger
  }
});

// Zavřít mobilní menu při přechodu na tablet/desktop view
const breakpoint = window.matchMedia('(min-width: 768px)');

breakpoint.addEventListener('change', e => {
  if (e.matches) {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  }
});
