document.body.style.overflow = "hidden";

$(window).on('load', function(){
  $('#preloader').fadeOut(500);
  document.body.style.overflow = "";
});