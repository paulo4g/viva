document.querySelectorAll('.container').forEach(container => {
    const img = container.querySelector('.icone');
    const text = container.querySelector('.text');
  
    container.addEventListener('mouseover', () => {
      text.textContent = img.alt;
    });
  
    container.addEventListener('mouseout', () => {
      text.textContent = '';
    });
  });
  