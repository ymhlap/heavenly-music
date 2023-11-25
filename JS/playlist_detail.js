document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#333';
    } else {
      header.style.backgroundColor = 'linear-gradient(to right, #191970, #333)'; // Change to your original color
    }
  });
});