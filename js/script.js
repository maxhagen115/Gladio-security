document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.letterSpacing = "1px";
    });
    link.addEventListener('mouseout', () => {
      link.style.letterSpacing = "normal";
    });
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent', 'text-white');
    navbar.classList.add('bg-white', 'text-black', 'shadow-md');
  } else {
    navbar.classList.add('bg-transparent', 'text-white');
    navbar.classList.remove('bg-white', 'text-black', 'shadow-md');
  }
});

