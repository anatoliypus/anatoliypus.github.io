if (document.documentElement.clientWidth > 550) {
  let showStyles = {
    backgroundColor: 'transparent',
    position: 'relative',
    height: '125px'
  }
  
  let hideStyles = {
    backgroundColor: '#168514',
    position: 'fixed',
    height: '80px'
  }
  
  let showLogoStyles = {
    width: '90px',
    height: '90px'
  }
  
  let hideLogoStyles = {
    width: '60px',
    height: '60px'
  }
  
  let cond = 0;
  
  function showHideNav() 
  {
    if (window.pageYOffset > 1000 && cond == 0)
    {
      $('#header-nav').hide();
      $('#header-nav').css(hideStyles);
      $('#logoLink').css(hideLogoStyles);
      $('#header-nav').slideDown(200);
      cond = 1;
    } 
    if (cond == 1 && window.pageYOffset < 820) {
      $('#header-nav').slideUp(50);
      cond = 0;
      setTimeout(() => {$('#header-nav').show(); $('#header-nav').css(showStyles); $('#logoLink').css(showLogoStyles)}, 70);
    }
  }
  
  setInterval(showHideNav, 300);
}

