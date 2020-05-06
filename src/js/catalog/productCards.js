window.onload = function() {
  const productCard = document.querySelector('#product-card');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const productCardContent = document.querySelector('#product-card-content');
  const footerHeight = footer.getBoundingClientRect().height;
  const navHeight = nav.getBoundingClientRect().height;
  const whiteBlock = document.querySelector('#white-block');
  // const keepInTouch = document.querySelector('.keep-in-touch');

  $('#white-block').hide();
  whiteBlock.style.visibility = 'visible';
  $('#product-card').hide();
  productCard.style.visibility = 'visible';

  let scrollHeightTrue = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  // let blocksHeight = navHeight + footerHeight;
  // blocksHeight += keepInTouch.getBoundingClientRect().height;

  let productCardHeight = document.documentElement.clientHeight - navHeight - footerHeight + 'px';
  productCard.style.height = scrollHeightTrue + 'px';

  let lastOffset = 0;

  document.querySelector('.products-block').addEventListener('click', function(event) {
    let el = event.target.closest('div');
    if (!el) return;
    lastOffset = window.pageYOffset;
    $('#white-block').fadeIn(300, () => {
      $('body').css({position: 'fixed', height: '100%', overflow: 'hidden'});
      $('nav, footer').css({position: 'absolute'});
      $('footer').css({backgroundColor: '#168514'});
      $('footer h3, footer a').css({color: '#fff'});
      $('#product-card').css({top: window.pageYOffset + navHeight + 'px', height: productCardHeight});
      $('#product-card').show();
      $('nav').animate({top: window.pageYOffset + 'px'}, 500);
      $('footer').animate({top: window.pageYOffset + document.documentElement.clientHeight - footerHeight + 'px'}, 500, 'linear', () => {
        $('#white-block').fadeOut(900);
      });
    });
  });

  

  document.querySelector('#product-card-return').addEventListener('click', function() {
    $('#white-block').fadeIn(900, () => {
      $('#product-card').hide();
      $('nav').animate({top: 0}, 500);
      $('footer').animate({top: scrollHeightTrue - footerHeight}, 500, 'linear', () => {
        $('footer, nav').css({position: 'static'});
        $('body').css({position: 'static', height: 'auto', overflow: 'visible'});
        $('footer').css({backgroundColor: '#fff'});
        $('footer h3, footer a').css({color: '#000'});
        window.scrollTo(0, lastOffset);
        $('#white-block').fadeOut(600);
      });
    });
  });
}