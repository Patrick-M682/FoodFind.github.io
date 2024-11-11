document.addEventListener("DOMContentLoaded", () => {
    const foodIcons = ['🍣', '🍤', '🥐', '🍕', '🍔', '🍩', '🍪', '🍰'];
    const container = document.querySelector('.container');
  
    foodIcons.forEach(icon => {
      const floatingIcon = document.createElement('div');
      floatingIcon.className = 'floating-icon';
      floatingIcon.innerText = icon;
      floatingIcon.style.left = Math.random() * 100 + 'vw';
      floatingIcon.style.animationDuration = (Math.random() * 3 + 4) + 's';
      floatingIcon.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(floatingIcon);
    });
  });
  