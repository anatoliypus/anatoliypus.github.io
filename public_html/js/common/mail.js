const mailBlock = document.querySelector('#modal-mail');
const sendBtn = document.querySelector('#send-mail');
const closeMailBtn = document.querySelector('#modal-mail-close');
const mailForm = document.querySelector('#modal-mail form');

$('#modal-mail').hide();
mailBlock.style.visibility = 'visible';

sendBtn.addEventListener('click', function() {
  $('#modal-mail, #shadow').fadeIn(500);
  document.body.style.overflow = 'hidden';
})

closeMailBtn.addEventListener('click', function() {
  $('#modal-mail, #shadow').fadeOut(500);
  document.body.style.overflow = '';
});

mailForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  let request = await fetch('/utils/sendMail.php', {
    method: 'POST', 
    body: new FormData(mailForm)
  });
  if (request) {
    let response = await request.json();
    if (response.length > 0) {
      
    } else 
    {
      $('#modal-mail .container').fadeOut(500, function() {
        document.querySelector('#modal-mail .container').style = 'justify-content: center';
        const mailSuccessCode = '<h5 style="font-size: 45px; color: #000; text-align: center">Спасибо за ваше обращение!</h1><img style="margin-top: 50px; width: 250px; height:250px" src="/img/success-icon.svg" alt="success-icon">';
        document.querySelector('#modal-mail .container').innerHTML = mailSuccessCode;
        $('#modal-mail .container').fadeIn(500);
      });
    }
    for (el of document.querySelectorAll('#mail-form input, #mail-form textarea')) {
      if (response.includes(el.name)) {
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



