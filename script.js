// script.js

// Smooth navigation
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    window.location.href = target;
  });
});

// Image animation on scroll
const images = document.querySelectorAll('img');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

images.forEach(img => {
  img.style.opacity = 0;
  img.style.transform = 'translateY(50px)';
  img.style.transition = 'all 0.6s ease-out';
  observer.observe(img);
});

// Typing animation for header titles
function typeEffect(element, speed = 75) {
  const text = element.innerText;
  element.innerText = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('main h1');
  headers.forEach(h => typeEffect(h));
});

// Dark/Light mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.zIndex = '1000';
toggleButton.style.padding = '0.5em 1em';
toggleButton.style.backgroundColor = 'black';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

let darkMode = false;
toggleButton.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? '#1a1a1a' : '#ffffff';
  document.body.style.color = darkMode ? '#ffffff' : '#000000';
});
