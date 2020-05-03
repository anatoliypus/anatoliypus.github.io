function run() {
  $('.header-slider').css({width: '100%'});

  $('.header-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 4000,
    speed: 700,
    pauseOnHover: false,
    appendDots: $('.slider-dots')
  });

  $('.reviews-block').slick({
    infinite: true,
    appendArrows: $('.reviews')
  });
}

if (document.documentElement.clientWidth > 550) {
  window.onload = run;
}