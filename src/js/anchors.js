const links = document.getElementsByClassName('nav-links');

function anchor(event) {
  let destId = event.target.getAttribute('destId');
  let dest = document.getElementById(destId);
  let destOffset = dest.getBoundingClientRect().top;
  $('html, body').animate({scrollTop: destOffset}, 1000);
}

for (el of links) {
  el.addEventListener('click', anchor);
}