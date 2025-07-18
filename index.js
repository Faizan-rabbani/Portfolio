document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('content').style.display = 'block';
    document.body.classList.add('loaded');
  }, 1000);
});
