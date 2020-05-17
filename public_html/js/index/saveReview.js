const form = document.getElementById('review-form');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  let request = await fetch('/utils/saveReview.php', {
    method: 'POST', 
    body: new FormData(form)
  });
  if (request) {
    let response = await request.json();
    if (response.length > 0) {
      
    } else 
    {
      $('#modal-reviews .container').fadeOut(500, function() {
        document.querySelector('#modal-reviews .container').style = 'justify-content: center';
        const successCode = '<h1 style="font-size: 45px; color="#000">Спасибо за ваш отзыв!</h1><img style="margin-top: 50px; width: 250px; height:250px" src="/img/success-icon.svg" alt="success-icon">';
        document.querySelector('#modal-reviews .container').innerHTML = successCode;
        $('#modal-reviews .container').fadeIn(500);
      });
    }
    for (el of document.querySelectorAll('#review-form input, #review-form textarea')) {
      if (response.includes(el.name) ) {
        if (el.closest('div').querySelector('img') == null) {
          const imgError = document.createElement('img');
          imgError.src = '/img/error-icon.svg';
          imgError.style = 'width: 20px; height: 20px';
          el.closest('div').append(imgError);
        }
        el.style.border = '1px solid red';
      } else {
        if (el.type != 'submit') {
          el.style.border = '1px solid green';
        }
      }
    }
  }
});