const contenedor = document.querySelector('.contenedor');
const destellos = document.getElementById('destellos');

contenedor.addEventListener('mouseenter', () => {
  destellos.style.opacity = '1';
  destellos.style.animation = 'destello 0.5s ease-in-out';
});

contenedor.addEventListener('mouseleave', () => {
  destellos.style.opacity = '0';
});
