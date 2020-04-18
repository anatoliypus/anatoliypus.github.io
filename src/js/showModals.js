$('#modal-menu, #shadow').hide();

$('#modal-btn').click(function() {
  let offset = document.documentElement.clientHeight / 6.66 + window.pageYOffset;
  $('#modal-menu').css('top', offset + 'px');
  $('#modal-menu, #shadow').fadeIn(300);
  document.body.style.overflow = "hidden";
});

$('#modal-menu-close').click(function() {
  $('#modal-menu, #shadow').fadeOut(300);
  document.body.style.overflow = "";
})

