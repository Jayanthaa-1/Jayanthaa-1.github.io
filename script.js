// Intro screen logic
window.addEventListener('load', function() {
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

// Scroll animations
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('fade-in');
    }
  });
});

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Project popup
function openProject(title, description) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-description').innerText = description;
  document.getElementById('project-popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('project-popup').style.display = 'none';
  document.getElementById('certificate-popup').style.display = 'none';
}

// Certificate popup
function openPopup(imageSrc) {
  document.getElementById('certificate-img').src = imageSrc;
  document.getElementById('certificate-popup').style.display = 'block';
}
