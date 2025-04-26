document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    document.getElementById('intro-screen').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('intro-screen').style.display = 'none';
      document.getElementById('portfolio-content').style.display = 'block';
      document.getElementById('portfolio-content').style.opacity = 1;
      // Fade in sections
      document.querySelectorAll('.section').forEach((sec, index) => {
        setTimeout(() => {
          sec.classList.add('fade-in');
        }, index * 300);
      });
    }, 1000); // wait for fadeout animation
  }, 3000); // initial 3 seconds welcome
  

  // Dark Mode Toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });

  // Terminal typing text
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
        i = (i + 1) % texts.length;
        terminalText.innerHTML = '';
        type();
      }, 2000);
    }
  }
  type();
});
