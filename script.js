const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});
