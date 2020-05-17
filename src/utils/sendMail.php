<?php

function sendMail(): void
{
    // Файлы phpmailer
    require '../src/phpmailer/PHPMailer.php';
    require '../src/phpmailer/SMTP.php';
    require '../src/phpmailer/Exception.php';

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $text = $_POST['mail-content'];

    $nameNotContainsDigits = TRUE;

      $nameArr = str_split($name);

      foreach ($nameArr as $char)
      {
        if (is_numeric($char))
        {
          $nameNotContainsDigits = FALSE;
        }
      }

    $json = array();

    if (!$nameNotContainsDigits or strlen($name) == 0) 
    {
      array_push($json, 'name');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
      array_push($json, 'email');
    }

    if (($mobile[0] != '+' and $mobile[0] != '8') or strlen($mobile) > 12 or strlen($mobile) < 11)
    {
      array_push($json, 'mobile');
    }

    if (strlen($text) == 0)
    {
      array_push($json, 'mail-content');
    }

    echo json_encode($json);
    if (count($json) > 0)
    {
      die();
    }

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $msg = "ok";
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";                                          
        $mail->SMTPAuth   = true;

        // Настройки вашей почты
        $mail->Host       = 'smtp.timeweb.ru'; // SMTP сервера 
        $mail->Username   = 'administrator@eap-testprojects.ru'; // Логин на почте
        $mail->Password   = 'MKTk4Uwt'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('administrator@eap-testprojects.ru', 'ЗАО Марийское'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('anatoliypuss5@gmail.com'); 

            // -----------------------
            // Само письмо
            // -----------------------
            $mail->isHTML(true);

            $mail->Subject = 'Обратная связь с сайта ЗАО "Марийское"';
            $mail->Body    = "<b>Имя:</b> $name <br>
            <b>Почта:</b> $email<br><br>
            <b>Телефон:</b> $mobile<br><br>
            <b>Сообщение:</b><br>$text";


        // Отправляем сообщение
        $mail->send();
    } catch(Exception $e) {}
}