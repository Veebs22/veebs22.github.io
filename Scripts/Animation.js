document.addEventListener('DOMContentLoaded', () => {
    const frames = Array.from(document.querySelectorAll('.animation-Frame'));
    
    frames.forEach(frame => {
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
  });