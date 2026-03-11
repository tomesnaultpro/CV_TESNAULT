/* ==========================================
   NAVIGATION — BURGER MENU
   ========================================== */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Ferme le menu au clic extérieur
document.addEventListener('click', function(e) {
  const nav = document.querySelector('nav');
  const links = document.getElementById('navLinks');
  if (links && nav && !nav.contains(e.target)) {
    links.classList.remove('open');
  }
});

/* ==========================================
   PDF VIEWER
   Usage : openPDF('pdf/nom-du-fichier.pdf', 'Titre affiché')
   ========================================== */
function openPDF(path, title) {
  document.getElementById('pdf-title').textContent = title || 'Document';
  document.getElementById('pdf-frame').src = path;
  document.getElementById('pdf-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePDF() {
  document.getElementById('pdf-overlay').classList.remove('open');
  document.getElementById('pdf-frame').src = '';
  document.body.style.overflow = '';
}

// Ferme l'overlay en cliquant en dehors de la fenêtre PDF
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('pdf-overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closePDF();
    });
  }
});

// Ferme avec la touche Echap
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePDF();
});
