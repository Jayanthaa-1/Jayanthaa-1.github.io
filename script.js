document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
  }, 3000);

  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.toggleAttribute('data-theme', 'dark');
  });

  // Simulate terminal typing animation
  const terminalText = document.getElementById('terminal');
  const texts = ['Ethical Hacker', 'Cybersecurity Specialist', 'Linux Enthusiast'];
  let i = 0;
  let j = 0;
  function type() {
    terminalText.innerHTML = texts[i].substring(0, j++) + '|';
    if (j <= texts[i].length) {
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        j = 0;
        i++;
        if (i === texts.length) i = 0;
        terminalText.innerHTML = '';
        type();
      }, 2000);
    }
  }
  type();
});
