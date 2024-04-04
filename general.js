// Add active class on click
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all other links
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
      });
      // Add active class to the clicked link
      this.classList.add('active');
    });
  });
  