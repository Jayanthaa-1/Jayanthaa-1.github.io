document.addEventListener('DOMContentLoaded', () => {
  // Intro screen animation
  setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
  }, 3000);

  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.textContent = '☀️';
  }

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
});
