let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
$('#shadow').css({height: scrollHeight + 'px'});
if (document.documentElement.clientWidth > 550) {
  document.addEventListener('DOMContentLoaded', function() {
    $('#modal-menu, #shadow, #modal-reviews').hide();
    $('#modal-menu, #modal-reviews, #shadow').css({visibility: 'visible'});
  
    $('#modal-btn, #footer-modal-btn').click(function() {
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
  });
}





