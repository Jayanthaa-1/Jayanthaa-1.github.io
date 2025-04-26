document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.btn-outline').forEach(function(button) {
  button.addEventListener('click', function() {
    document.getElementById('certModal').classList.add('show');
    document.getElementById('modal-content').innerHTML = 'Certification details here...';
  });
});

document.querySelector('.close-modal').addEventListener('click', function() {
  document.getElementById('certModal').classList.remove('show');
});
