const links = document.getElementsByClassName('nav-links');
const logoLink = document.getElementById('logoLink');

function anchor(event) {
  let destId = event.target.getAttribute('destId');
  let dest = document.getElementById(destId);
  let destOffset = dest.getBoundingClientRect().top;
  let navPar = 80;
  if (destId == 'product-features' && window.pageYOffset < 300) {
    navPar = 0;
  }
  $('html, body').animate({scrollTop: destOffset + window.pageYOffset - navPar}, 1500);
}

for (el of links) {
  el.addEventListener('click', anchor);
}
logoLink.addEventListener('click', anchor);