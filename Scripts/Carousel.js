document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    let currentIndex = 0;
  
    function updateCarousel() {
      images.forEach((img, i) => {
        img.classList.remove('active', 'left', 'right');
  
        if (i === currentIndex) {
          img.classList.add('active');
        } else if (i === (currentIndex - 1 + images.length) % images.length) {
          img.classList.add('left');
        } else if (i === (currentIndex + 1) % images.length) {
          img.classList.add('right');
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }
  
    updateCarousel();
    setInterval(nextSlide, 5000); // Every 5 seconds
  });
  