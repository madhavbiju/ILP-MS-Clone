var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds

  // Code to hide all captions
  var captions = document.getElementsByClassName("overlay");
  for (i = 0; i < captions.length; i++) {
    captions[i].style.display = "none";
  }
  // Display the caption for the current slide
  captions[slideIndex - 1].style.display = "flex";
}
