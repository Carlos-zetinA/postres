document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      alert(`Seleccionaste: ${event.target.textContent}`);
  });
});

