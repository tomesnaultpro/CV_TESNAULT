/* ============================================================
   PORTFOLIO — TOM ESNAULT
   Script principal
   ============================================================ */

/* ——————————————————————————————————————
   NAVIGATION BURGER
—————————————————————————————————————— */
function toggleMenu() {
  const burger = document.querySelector('.nav-burger');
  const links  = document.getElementById('navLinks');
  if (!burger || !links) return;
  const isOpen = links.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
}

// Ferme le menu en cliquant en dehors
document.addEventListener('click', function(e) {
  const nav   = document.querySelector('.nav');
  const links = document.getElementById('navLinks');
  if (links && nav && !nav.contains(e.target) && links.classList.contains('open')) {
    links.classList.remove('open');
    const burger = document.querySelector('.nav-burger');
    if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  }
});

// Ferme le menu au clic sur un lien (mobile)
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    const links  = document.getElementById('navLinks');
    const burger = document.querySelector('.nav-burger');
    if (links) links.classList.remove('open');
    if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });
});
