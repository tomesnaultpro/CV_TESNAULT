/* ============================================================
   PORTFOLIO — TOM ESNAULT
   script.js — Navigation burger
   ============================================================ */

function toggleMenu() {
  const burger = document.querySelector('.nav-burger');
  const links  = document.getElementById('navLinks');
  if (!burger || !links) return;
  const open = links.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
}

/* Ferme le menu si clic en dehors */
document.addEventListener('click', function(e) {
  const nav   = document.querySelector('.nav');
  const links = document.getElementById('navLinks');
  if (links && nav && !nav.contains(e.target) && links.classList.contains('open')) {
    links.classList.remove('open');
    const b = document.querySelector('.nav-burger');
    if (b) { b.classList.remove('open'); b.setAttribute('aria-expanded', false); }
  }
});

/* Ferme le menu au clic sur un lien (mobile) */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.addEventListener('click', function() {
      const links = document.getElementById('navLinks');
      const b     = document.querySelector('.nav-burger');
      if (links) links.classList.remove('open');
      if (b) { b.classList.remove('open'); b.setAttribute('aria-expanded', false); }
    });
  });
});
