const links = document.getElementsByClassName('nav-links');
const logoLink = document.getElementById('logoLink');
const navHeight = 80;

function anchor(event) {
  let destId = event.target.getAttribute('destId');
  let dest = document.getElementById(destId);
  let destOffset = dest.getBoundingClientRect().top;
  let navPar = navHeight;
  if (destId == 'product-features' && window.pageYOffset < 300) {
    navPar = 0;
  }
  if (destId != 'header' || window.pageYOffset > 300) {
    $('html, body').animate({scrollTop: destOffset + window.pageYOffset - navPar}, 1500);
  }
}

document.getElementById('shopsAnchor').onclick = function() {
  let offset = document.getElementById('shops').getBoundingClientRect().top - navHeight;
  $('html, body').animate({scrollTop: offset}, 1500);
}

for (el of links) {
  el.addEventListener('click', anchor);
}
logoLink.addEventListener('click', anchor);