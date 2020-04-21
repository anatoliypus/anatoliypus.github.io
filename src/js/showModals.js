$('#modal-menu, #shadow, #modal-reviews').hide();

$('#modal-btn').click(function() {
  $('#modal-menu, #shadow').fadeIn(300);
  document.body.style.overflow = "hidden";
});

$('#modal-menu-close').click(function() {
  $('#modal-menu, #shadow').fadeOut(300);
  document.body.style.overflow = "";
})

$('#makeReview').click(function() {
  $('#modal-reviews, #shadow').fadeIn(300);
  document.body.style.overflow = "hidden";
});

$('#modal-reviews-close').click(function() {
  $('#modal-reviews, #shadow').fadeOut(300);
  document.body.style.overflow = "";
});

