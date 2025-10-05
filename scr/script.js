// src/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Simple keyboard focus enhancement
  const links = document.querySelectorAll('a');
  links.forEach(a => a.addEventListener('focus', () => a.style.outline = '2px solid rgba(229,9,20,0.2)'));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
