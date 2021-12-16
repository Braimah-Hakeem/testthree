// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("btn-1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
  }
}



// var slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("carouselContent");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//   slides[slidePosition-1].style.display = "block";
// } 

var slidePosition = 3;
SlideShow();

function SlideShow() {
  var slides = document.getElementsByClassName("carouselContent");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slidePosition === slides.length - 1) {
    slidePosition = 0
  }else {
    slidePosition++
  }
  slides[slidePosition].style.display = "block";
  slides[slidePosition].style.backgroundColor = "#F1C40F";
  setTimeout(SlideShow, 7000); // Change image every 7 seconds
} 


