document.addEventListener('DOMContentLoaded', () => {
    const wanderer = document.getElementById('wanderer');
    const box = document.querySelector('.wander-box');
    
    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;
  
    let pos = { x: boxWidth / 2, y: boxHeight / 2 };
  
    function moveToRandomPosition() {
      const target = {
        x: Math.random() * (boxWidth - 300),
        y: Math.random() * (boxHeight - 300),
      };
  
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      let angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90; // Degrees
      if (angle < 0) angle += 360; 
  
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 100; // pixels per second
      const duration = distance / speed * 1000;
  
      wanderer.style.transition = `left ${duration}ms linear, top ${duration}ms linear, transform 300ms ease`;
  
      wanderer.style.left = `${target.x}px`;
      wanderer.style.top = `${target.y}px`;
  
      wanderer.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  
      pos = target;
  
      setTimeout(moveToRandomPosition, duration); // Pause a bit before next move
    }
  
    moveToRandomPosition();
  });
  