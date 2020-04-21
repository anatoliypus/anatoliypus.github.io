
const links=document.getElementsByClassName('nav-links');const logoLink=document.getElementById('logoLink');function anchor(event){let destId=event.target.getAttribute('destId');let dest=document.getElementById(destId);let destOffset=dest.getBoundingClientRect().top;let navPar=80;if(destId=='product-features'&&window.pageYOffset<300){navPar=0;}
if(destId!='header'||window.pageYOffset>300){$('html, body').animate({scrollTop:destOffset+window.pageYOffset-navPar},1500);}}
for(el of links){el.addEventListener('click',anchor);}
logoLink.addEventListener('click',anchor);let showStyles={backgroundColor:'transparent',position:'relative',height:'125px'}
let hideStyles={backgroundColor:'#168514',position:'fixed',height:'80px'}
let showLogoStyles={width:'90px',height:'90px'}
let hideLogoStyles={width:'60px',height:'60px'}
let cond=0;function showHideNav()
{if(window.pageYOffset>1000&&cond==0)
{$('#header-nav').hide();$('#header-nav').css(hideStyles);$('#logoLink').css(hideLogoStyles);$('#header-nav').slideDown(200);cond=1;}
if(cond==1&&window.pageYOffset<820){$('#header-nav').slideUp(50);cond=0;setTimeout(()=>{$('#header-nav').show();$('#header-nav').css(showStyles);$('#logoLink').css(showLogoStyles)},70);}}
setInterval(showHideNav,300);$('#modal-menu, #shadow, #modal-reviews').hide();$('#modal-btn').click(function(){$('#modal-menu, #shadow').fadeIn(300);document.body.style.overflow="hidden";});$('#modal-menu-close').click(function(){$('#modal-menu, #shadow').fadeOut(300);document.body.style.overflow="";})
$('#makeReview').click(function(){$('#modal-reviews, #shadow').fadeIn(300);document.body.style.overflow="hidden";});$('#modal-reviews-close').click(function(){$('#modal-reviews, #shadow').fadeOut(300);document.body.style.overflow="";});