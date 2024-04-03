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
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});
