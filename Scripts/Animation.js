
document.addEventListener('DOMContentLoaded', () => {
  const frame = document.querySelector('.animation-Frame');
  const images = Array.from(frame.children);
  let currentIndex = 0;

  function updateFrame() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  function nextFrame() {
    currentIndex = (currentIndex + 1) % images.length;
    updateFrame();
  }

  updateFrame();
  setInterval(nextFrame, 83); // ~12 fps
});
