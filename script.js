document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    document.getElementById('intro-screen').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('intro-screen').style.display = 'none';
      document.getElementById('portfolio-content').style.display = 'block';
      setTimeout(() => {
        document.getElementById('portfolio-content').style.opacity = 1;
      }, 100);
    }, 1000);
  }, 3000);

  const terminalText = document.getElementById('terminal');
  const texts = ['Ethical Hacker', 'Cybersecurity Specialist', 'Linux Enthusiast'];
  let i = 0, j = 0;
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

  // Scroll Animation
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < window.innerHeight - 100) {
        section.classList.add('fade-in');
      }
    });
  });
});

// Project popup
const projectData = {
  keylogger: {
    title: "Keylogger with TOR Integration (Python)",
    description: "Developed a Python-based keylogger for educational purposes. Implemented log encryption and anonymized data transfer via the TOR network."
  },
  penetration: {
    title: "Penetration Testing Toolkit (Kali Linux + Flask API)",
    description: "Created a penetration testing API with network scanning, MITM simulation, and exploit automation using Python Flask and Bash."
  },
  wifi: {
    title: "Wi-Fi Deauthentication Attack Tool (ESP32)",
    description: "Built a Wi-Fi deauth tool using ESP32 exploiting IEEE 802.11 protocol to showcase security risks and recommend WPA2/WPA3 protections."
  },
  recon: {
    title: "Network Reconnaissance Toolkit using Kali Linux",
    description: "Built a toolkit using nmap, arp-scan, netdiscover, Wireshark for automated local subnet scanning and enumeration."
  },
  helmet: {
    title: "Helmet Detection & Safety Automation System",
    description: "Developed YOLOv8-based real-time helmet detection model integrated with Raspberry Pi, enhancing road safety automation."
  }
};

function openProject(key) {
  document.getElementById('project-title').textContent = projectData[key].title;
  document.getElementById('project-description').textContent = projectData[key].description;
  document.getElementById('project-popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('project-popup').style.display = 'none';
}
