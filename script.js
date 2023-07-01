// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get the scrollable element by its id
  const scrollableElement = document.getElementById("myScrollableBox");
  // Create a new SimpleBar instance
  new SimpleBar(scrollableElement);
  // Get the second scrollable element by its id
  const secondScrollableElement = document.getElementById(
    "mySecondScrollableBox"
  );
  // Create a new SimpleBar instance
  new SimpleBar(secondScrollableElement);
});

var slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  var slides = document
    .getElementsByClassName("slides")[0]
    .getElementsByTagName("img");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}
