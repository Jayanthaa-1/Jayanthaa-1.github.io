// ===== INTRO ANIMATION =====
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
    
    // Animate sections sequentially
    document.querySelectorAll('.section').forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('fade-in');
      }, 200 * index);
    });
  }, 3500);
});

// ===== TERMINAL TYPING EFFECT =====
const terminalText = "Cybersecurity • Linux Enthusiast • Ethical Hacker";
const terminalElement = document.getElementById('terminal');

function typeWriter() {
  let i = 0;
  terminalElement.innerHTML = ''; // Clear existing text
  
  function type() {
    if (i < terminalText.length) {
      terminalElement.innerHTML += terminalText.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  
  // Start typing after intro
  setTimeout(type, 3500);
}
typeWriter();

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  darkModeToggle.textContent = '☀️';
}

// Toggle function
darkModeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// ===== CERTIFICATION MODALS =====
const certCards = document.querySelectorAll('.cert-card');
const certModal = document.getElementById('certModal');
const modalContent = document.getElementById('modal-content');

certCards.forEach(card => {
  card.addEventListener('click', () => {
    const certType = card.getAttribute('data-cert');
    
    if (certType === 'ceh') {
      modalContent.innerHTML = `
        <h3><i class="fas fa-shield-alt"></i> Certified Ethical Hacker</h3>
        <p><strong>Issuer:</strong> EC-Council</p>
        <p><strong>Date:</strong> 2024</p>
        <p><strong>Skills:</strong> Penetration testing, vulnerability assessment</p>
        <a href="#" class="btn"><i class="fas fa-download"></i> Download</a>
      `;
    }
    // Add more cert types as needed
    
    certModal.style.display = 'flex';
  });
});

// Close modal
document.querySelector('.close-modal').addEventListener('click', () => {
  certModal.style.display = 'none';
});

// Close when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === certModal) {
    certModal.style.display = 'none';
  }
});