//Target
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

//state
let activeSlide = 0;

//body bg function
function setBgToBody() {
  //Set body bg
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

//setActive slide function
function setActiveSlide() {
  //iterate slide element
  slides.forEach((slide) => {
    //remove active class
    slide.classList.remove("active");
  });

  //use active state
  slides[activeSlide].classList.add("active");
}

//btn event handler
rightBtn.addEventListener("click", function (e) {
  //increment state
  activeSlide++;

  //check
  if (activeSlide > slides.length - 1) {
    //Set 0
    activeSlide = 0;
  }

  //call function
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", function (e) {
  //decrement state
  activeSlide--;

  //check
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  //call function
  setBgToBody();
  setActiveSlide();
});
