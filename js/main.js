const header = document.querySelector(".topbar");
const nav = document.querySelector(".nav");
const burger = document.getElementById("burger");
burger?.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
});

// Glidende scroll for interne ankre
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 8, behavior: "smooth" });
        nav.classList.remove("nav--open");
      }
    }
  });
});
