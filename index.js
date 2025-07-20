document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('content').style.display = 'block';
    document.body.classList.add('loaded');
  }, 1000);
});

  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('#navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
  });