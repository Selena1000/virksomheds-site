// === OmOs.js ===

// Finder elementerne
const header = document.querySelector('.topbar');
const nav = document.querySelector('.nav');
const burger = document.getElementById('burger');

// Mobilmenu toggle
if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });
}

// Glidende scroll for interne ankre (fx #about)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        const offset = header.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        nav.classList.remove('nav--open');
      }
    }
  });
});
