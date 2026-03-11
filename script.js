/* ============================================
   SCRIPT.JS — Tom Esnault Portfolio
   ============================================ */

/* --- Burger menu toggle --- */
function initBurger() {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Ferme le menu si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

/* --- Active nav link --- */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- Ouvrir le PDF viewer --- */
function openPDF(file, title) {
  window.location.href = `pdf-viewer.html?file=${encodeURIComponent(file)}&title=${encodeURIComponent(title)}`;
}

/* --- Init au chargement --- */
document.addEventListener('DOMContentLoaded', () => {
  initBurger();
  setActiveNav();
});
