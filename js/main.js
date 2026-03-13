// ── PAGE TRANSITION ──────────────────────────────────────────
const curtain = document.querySelector('.page-transition');

window.addEventListener('load', () => {
  if (curtain) {
    curtain.classList.add('in');
    setTimeout(() => curtain.classList.remove('in'), 600);
  }
});

document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;
  link.addEventListener('click', e => {
    e.preventDefault();
    if (curtain) {
      curtain.classList.add('out');
      setTimeout(() => window.location.href = href, 500);
    } else {
      window.location.href = href;
    }
  });
});

const nav = document.querySelector('nav');

// ── NAV: transparent on hero, solid on scroll ─────────────────
function updateNav() {
  if (window.scrollY > 60) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // run on load


// ── HAMBURGER DROPDOWN TOGGLE ─────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-dropdown');

hamburger?.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('open');
  menuOverlay?.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (menuOverlay?.classList.contains('open') &&
      !menuOverlay.contains(e.target) &&
      !hamburger.contains(e.target)) {
    hamburger.classList.remove('open');
    menuOverlay.classList.remove('open');
  }
});

// Close menu on link click
menuOverlay?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    menuOverlay.classList.remove('open');
  });
});

// ── ACTIVE NAV LINK ───────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .menu-dropdown a').forEach(link => {
  const href = link.getAttribute('href')?.split('#')[0];
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));