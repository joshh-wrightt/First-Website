// Smooth scroll to projects section
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
