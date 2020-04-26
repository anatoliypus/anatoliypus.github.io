
const links=document.getElementsByClassName('nav-links');const logoLink=document.getElementById('logoLink');const navHeight=80;function anchor(event){let destId=event.target.getAttribute('destId');let dest=document.getElementById(destId);let destOffset=dest.getBoundingClientRect().top;let navPar=navHeight;if(destId=='product-features'&&window.pageYOffset<300){navPar=0;}
if(destId!='header'||window.pageYOffset>300){$('html, body').animate({scrollTop:destOffset+window.pageYOffset-navPar},1500);}}
document.getElementById('shopsAnchor').onclick=function(){let offset=document.getElementById('shops').getBoundingClientRect().top-navHeight;$('html, body').animate({scrollTop:offset},1500);}
for(el of links){el.addEventListener('click',anchor);}
logoLink.addEventListener('click',anchor);const slides=document.getElementsByClassName('slide');const dots=document.getElementsByClassName('dot');let currentSlide=1;let previousSlide=1;const slidesAmount=5;let clientWidth=document.documentElement.clientWidth;function dotsEvents(){for(el of dots){el.addEventListener('click',function(event){changeSlide(event.target.getAttribute('itemTo'));});}}
function changeSlide(num){if(num>slidesAmount){num=1;}
for(el of dots){if(el.getAttribute('itemTo')==previousSlide){el.classList.remove('active-dot');}
if(el.getAttribute('itemTo')==num){el.classList.add('active-dot');}}
let offset=-1*document.documentElement.clientWidth*(num-1);$('header').animate({marginLeft:offset},1000);currentSlide=Number(num);previousSlide=num;}
window.onload=function(){dotsEvents();let timerId=setInterval(()=>{currentSlide++;changeSlide(currentSlide)},6000);for(el of dots){el.addEventListener('click',function(){clearInterval(timerId);timerId=setInterval(()=>{currentSlide++;changeSlide(currentSlide)},6000);});}
setInterval(()=>{if(document.documentElement.clientWidth!=clientWidth){clientWidth=document.documentElement.clientWidth;let offset=-1*document.documentElement.clientWidth*(currentSlide-1);$('header').css({marginLeft:offset},1000);}},200)};function run(){let imgNext=document.createElement('img');imgNext.src="img/angle-right.png";imgNext.style.width='17px';imgNext.style.height='25px';let imgPrev=document.createElement('img');imgPrev.src="img/angle-left.png";imgPrev.style.height='25px';imgPrev.style.width='17px';$('#header').slick({autoplay:true,autoplaySpeed:4000,speed:700});document.querySelector('.slick-next').append(imgNext);document.querySelector('.slick-prev').append(imgPrev);}
window.onload=function(){setTimeout(run,100);};let showStyles={backgroundColor:'transparent',position:'relative',height:'125px'}
let hideStyles={backgroundColor:'#168514',position:'fixed',height:'80px'}
let showLogoStyles={width:'90px',height:'90px'}
let hideLogoStyles={width:'60px',height:'60px'}
let cond=0;function showHideNav()
{if(window.pageYOffset>1000&&cond==0)
{$('#header-nav').hide();$('#header-nav').css(hideStyles);$('#logoLink').css(hideLogoStyles);$('#header-nav').slideDown(200);cond=1;}
if(cond==1&&window.pageYOffset<820){$('#header-nav').slideUp(50);cond=0;setTimeout(()=>{$('#header-nav').show();$('#header-nav').css(showStyles);$('#logoLink').css(showLogoStyles)},70);}}
setInterval(showHideNav,300);$('#modal-menu, #shadow, #modal-reviews').hide();$('#modal-btn').click(function(){$('#modal-menu, #shadow').fadeIn(300);document.body.style.overflow="hidden";});$('#modal-menu-close').click(function(){$('#modal-menu, #shadow').fadeOut(300);document.body.style.overflow="";})
$('#makeReview').click(function(){$('#modal-reviews, #shadow').fadeIn(300);document.body.style.overflow="hidden";});$('#modal-reviews-close').click(function(){$('#modal-reviews, #shadow').fadeOut(300);document.body.style.overflow="";});