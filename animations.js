let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function() {
  const texts = document.querySelectorAll('p, h1,h2,h3');

  // Function to check if an element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scrolling
  function handleScroll() {
    texts.forEach(text => {
      if (isInViewport(text)) {
        text.style.opacity = "1";
      } else {
        text.style.opacity = "0";
      }
    });
  }

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check on page load
  handleScroll();
});
