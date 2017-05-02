<?php

require 'phpmailer/class.phpmailer.php';


// ==== Принудительный захват массива переменных ==========================
// ==== раскомментировать, если письма отправляются без значений полей ====

$adninEmail = 'kacevnik@yandex.ru';
$email = $_POST['name']; if($email){$emailText = 'Имя пользователя: '.$email.'<br>';}
$phone = $_POST['phone']; if($phone){$phone = 'Телефон пользователя: '.$phone.'<br>';}
$form = $_POST['hidden'];

//Create a new PHPMailer instance
$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';
// От кого
$mail->setFrom($adninEmail, 'Wood-cnt');

// Кому
$mail->addAddress($adninEmail, $adninEmail);

// Тема
$mail->Subject = $form;

// convert HTML into a basic plain-text alternative body
$mail->msgHTML($emailText.$phone);


if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
  // echo "Message sent!";
}
