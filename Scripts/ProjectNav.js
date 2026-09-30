document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.project-nav-btn');
  const selectorButtons = document.querySelectorAll('.project-selector-item');
  const panels = document.querySelectorAll('.project-panel');
  const projectSelector = document.querySelector('.project-selector');

  function showProject(target) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.project === target);
    });

    selectorButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.project === target);
    });

    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `project-${target}`);
    });

    if (projectSelector) {
      projectSelector.classList.remove('divider-queen', 'divider-rereentry', 'divider-intodeep');
      projectSelector.classList.add(`divider-${target}`);
    }
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => showProject(button.dataset.project));
  });

  selectorButtons.forEach(button => {
    button.addEventListener('click', () => showProject(button.dataset.project));
  });

  showProject(document.querySelector('.project-selector-item.active')?.dataset.project || 'queen');
});
