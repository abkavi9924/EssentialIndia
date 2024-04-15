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

// Add active class to the menu item corresponding to the current page
window.addEventListener('DOMContentLoaded', function() {
  // Get the current page URL
  const currentPageURL = window.location.href;
  // Find the corresponding menu item and add the active class
  document.querySelectorAll('nav ul li a').forEach(link => {
      if (link.href === currentPageURL) {
          link.classList.add('active');
      }
  });
});
