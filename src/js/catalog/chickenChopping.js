const chickenBlock = document.getElementById('chicken-block');
const message = document.getElementById('chicken-block-message');
const parts = document.querySelectorAll('.chicken-parts');
$('#chicken-block-message').hide();
for (el of parts) {
  el.addEventListener('mouseover', function(event) {
    let heading = event.target.getAttribute('heading');
    if (heading != '') {
      $('#chicken-block-message').hide();
      message.querySelector('h3').textContent = heading;
      let offsetTop = Number(getComputedStyle(event.target).top.slice(0, -2));
      let OffsetRight = Number(getComputedStyle(event.target).right.slice(0, -2)) + 200;
      $('#chicken-block-message').css({top: offsetTop});
      if (offsetTop > 150) {
        $('#chicken-block-message').css({top: '-=150'});
      } else 
      {
        $('#chicken-block-message').css({right: OffsetRight});
      }
      $('#chicken-block-message').fadeIn(200);
    }
  });
}
chickenBlock.addEventListener('mouseleave', function(event) {
  $('#chicken-block-message').fadeOut(200);
});
