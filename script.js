const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    darkModeToggle.textContent = '🌞'; // Light mode icon
  } else {
    darkModeToggle.textContent = '🌙'; // Dark mode icon
  }
});
