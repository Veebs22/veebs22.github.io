const audio = document.getElementById('sample-audio');
const btn = document.getElementById('audio-btn');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '⏸ Pause';
  } else {
    audio.pause();
    btn.textContent = '▶ Play';
  }
});