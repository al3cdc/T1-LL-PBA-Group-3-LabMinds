const placards = document.querySelectorAll('.placard');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.2 });
placards.forEach(p => observer.observe(p));

// hero tag click pulses the grid
const heroTag = document.getElementById('heroTag');
const grid = document.querySelector('.hero-grid');
heroTag.addEventListener('click', () => {
  grid.style.transition = 'filter 0.3s ease';
  grid.style.filter = 'brightness(2)';
  setTimeout(() => { grid.style.filter = 'brightness(1)'; }, 300);
});

// gauge "charges" when its panel is hovered
const gauge = document.getElementById('gauge');
const lockoutPanel = document.querySelector('.lockout-panel');
lockoutPanel.addEventListener('mouseenter', () => gauge.classList.add('charged'));
lockoutPanel.addEventListener('mouseleave', () => gauge.classList.remove('charged'));

const header = document.getElementById("drop-header");
const content = document.getElementById("drop-content");
const items = document.querySelectorAll(".drop-item");

