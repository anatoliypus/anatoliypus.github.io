
const links=document.getElementsByClassName('nav-links');const logoLink=document.getElementById('logoLink');const navHeight=80;function anchor(event){let destId=event.target.getAttribute('destId');let dest=document.getElementById(destId);let destOffset=dest.getBoundingClientRect().top;let navPar=navHeight;if(destId=='product-features'&&window.pageYOffset<300){navPar=0;}
if(destId!='header'||window.pageYOffset>300){$('html, body').animate({scrollTop:destOffset+window.pageYOffset-navPar},1500);}}
document.getElementById('shopsAnchor').onclick=function(){let offset=document.getElementById('shops').getBoundingClientRect().top-navHeight;$('html, body').animate({scrollTop:offset},1500);}
for(el of links){el.addEventListener('click',anchor);}
logoLink.addEventListener('click',anchor);document.getElementById('grill-bar-anchor').addEventListener('click',anchor);document.getElementById('footer-anchor-1').addEventListener('click',anchor);document.getElementById('footer-anchor-2').addEventListener('click',anchor);if(document.documentElement.clientWidth>550){let showStyles={backgroundColor:'transparent',position:'relative',height:'125px'}
let hideStyles={backgroundColor:'#168514',position:'fixed',height:'80px'}
let showLogoStyles={width:'90px',height:'90px'}
let hideLogoStyles={width:'60px',height:'60px'}
let cond=0;function showHideNav()
{if(window.pageYOffset>1000&&cond==0)
{$('#header-nav').hide();$('#header-nav').css(hideStyles);$('#logoLink').css(hideLogoStyles);$('#header-nav').slideDown(200);cond=1;}
if(cond==1&&window.pageYOffset<820){$('#header-nav').slideUp(50);cond=0;setTimeout(()=>{$('#header-nav').show();$('#header-nav').css(showStyles);$('#logoLink').css(showLogoStyles)},70);}}
setInterval(showHideNav,300);}
$(window).on('load',function(){$('#preloader').fadeOut(500);});let scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);$('#shadow').css({height:scrollHeight+'px'});if(document.documentElement.clientWidth>550){document.addEventListener('DOMContentLoaded',function(){$('#modal-menu, #shadow, #modal-reviews').hide();$('#modal-menu, #modal-reviews, #shadow').css({visibility:'visible'});$('#modal-btn, #footer-modal-btn').click(function(){$('#modal-menu, #shadow').fadeIn(300);document.body.style.overflow="hidden";});$('#modal-menu-close').click(function(){$('#modal-menu, #shadow').fadeOut(300);document.body.style.overflow="";})
$('#makeReview').click(function(){$('#modal-reviews, #shadow').fadeIn(300);document.body.style.overflow="hidden";});$('#modal-reviews-close').click(function(){$('#modal-reviews, #shadow').fadeOut(300);document.body.style.overflow="";});});}
function run(){$('.header-slider').css({width:'100%'});let imgNext=document.createElement('img');imgNext.src="img/angle-right.png";imgNext.style.width='17px';imgNext.style.height='25px';let imgPrev=document.createElement('img');imgPrev.src="img/angle-left.png";imgPrev.style.height='25px';imgPrev.style.width='17px';$('.header-slider').slick({dots:true,arrows:false,autoplay:true,autoplaySpeed:4000,speed:700,pauseOnHover:false,appendDots:$('.slider-dots')});$('.reviews-block').slick({infinite:true,appendArrows:$('.reviews')});}
if(document.documentElement.clientWidth>550){window.onload=run;}