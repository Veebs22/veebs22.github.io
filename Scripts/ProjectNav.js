document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.project-nav-btn');
  const panels = document.querySelectorAll('.project-panel');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.project;

      navButtons.forEach(btn => btn.classList.toggle('active', btn === button));
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `project-${target}`);
      });
    });
  });
});
