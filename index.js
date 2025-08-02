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

  const tabButtons = document.querySelectorAll('.tab-button');
const projectCards = document.querySelectorAll('.project-card');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
