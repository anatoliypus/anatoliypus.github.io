function run() {
  $('.header-slider').css({width: '100%'});

  $('.header-slider').bxSlider({
    controls: false,
    auto: true,
    speed: 1100,
    pause: 6000
  });

  $('.reviews-block').bxSlider({
    pager: false,
    slideWidth: document.documentElement.clientWidth * 0.7 * 0.5,
    minSlides: 2,
    moveSlides: 1,
    maxSlides: 2,
    slideMargin: 40,
  });
}

if (document.documentElement.clientWidth > 550) {
  window.onload = run;
}