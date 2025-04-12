document.addEventListener('DOMContentLoaded', () => {
  const players = document.querySelectorAll('.audio-player');

  players.forEach(player => {
    const button = player.querySelector('.audio-btn');
    const audio = player.querySelector('audio');

    button.addEventListener('click', () => {
      document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) {
          a.pause();
          a.parentElement.querySelector('.audio-btn').textContent = '▶ Play';
        }
      });

      if (audio.paused) {
        audio.play();
        button.textContent = '⏸ Pause';
      } else {
        audio.pause();
        button.textContent = '▶ Play';
      }
    });
    audio.addEventListener('ended', () => {
      button.textContent = '▶ Play';
    });
  });
});