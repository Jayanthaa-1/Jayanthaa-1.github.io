// Intro Screen fade out
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('intro-screen').style.display = 'none';
      document.getElementById('portfolio-content').style.display = 'block';
      setTimeout(() => {
        document.getElementById('portfolio-content').style.opacity = '1';
      }, 50);
    }, 1000);
  }, 1500);
});

// Fade in sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});

// Project Popup Functions
function openProject(title, description) {
  document.getElementById('project-title').textContent = title;
  document.getElementById('project-description').textContent = description;
  document.getElementById('project-popup').style.display = 'flex';
}

function closeProject() {
  document.getElementById('project-popup').style.display = 'none';
}

// Certificate Popup Functions
function openCertificate(imgSrc) {
  document.getElementById('popup-img').src = imgSrc;
  document.getElementById('popup').style.display = 'block';
}

function closeCertificate() {
  document.getElementById('popup').style.display = 'none';
}
// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
}
