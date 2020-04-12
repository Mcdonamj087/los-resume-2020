const darkModeTrigger = document.getElementById('dark-mode-trigger');

darkModeTrigger.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});