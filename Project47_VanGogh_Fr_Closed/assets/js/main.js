const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    // Icône devient croix
    icon.classList.remove('ri-menu-4-line');
    icon.classList.add('ri-close-fill');

    // Bloquer le scroll
    document.body.style.overflow = 'hidden';
  } else {
    // Icône redevient burger
    icon.classList.remove('ri-close-fill');
    icon.classList.add('ri-menu-4-line');

    // Réactiver le scroll
    document.body.style.overflow = '';
  }
});

