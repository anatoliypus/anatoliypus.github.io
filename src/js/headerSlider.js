const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const width = document.documentElement.clientWidth;
let currentSlide = 1;
let previousSlide = 1;
const slidesAmount = 5;

function dotsEvents() {
  for (el of dots) {
    el.addEventListener('click', function(event) {
      changeSlide(event.target.getAttribute('itemTo'));
    });
  }
}

function changeSlide(num) {
  if (num > slidesAmount) {
    num = 1;
  }
  for (el of dots) {
    if (el.getAttribute('itemTo') == previousSlide) {
      el.classList.remove('active-dot');
    }
    if (el.getAttribute('itemTo') == num) {
      el.classList.add('active-dot');
    }
  }
  let offset = -1 * width * (num - 1);
  $('header').animate({marginLeft: offset}, 1000);
  currentSlide = Number(num);
  previousSlide = num;
}

window.onload = function() {
  dotsEvents();
  let timerId = setInterval(() => {currentSlide++; changeSlide(currentSlide)}, 6000);
  for (el of dots) {
    el.addEventListener('click', function() {
      clearInterval(timerId);
      timerId = setInterval(() => {currentSlide++; changeSlide(currentSlide)}, 6000);
    });
  }
};