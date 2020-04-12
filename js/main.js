/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

const darkModeTrigger = document.getElementById('dark-mode-trigger');

darkModeTrigger.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});