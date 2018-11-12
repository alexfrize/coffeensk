<?php
	// header("Access-Control-Allow-Origin: *");
	// header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
	// header("Access-Control-Allow-Headers: Content-Type");
	
	$data = json_decode(file_get_contents("php://input"), true);
	$info = "Имя покупателя: ";
	$info .= $data['customerName'];
	$info .= "<br/>Телефон: ";
	$info .= $data['customerTel'];
	$info .= "<br/>Текст сообщения: ";
	$info .= $data['customerMessage'];
	$info .= "<br/>--------------------------<br/>";	
    file_put_contents('testfile.txt', $info, FILE_APPEND);

    $to = "alexander.frize@gmail.com, ";
    $to .= "2130675@bk.ru" ;

    $subject = "CoffeeNsk - Сообщение с сайта";
	
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: CoffeeNsk <noreply@coffeensk.ru>\r\n";

    mail($to, $subject, $info, $headers);
?>