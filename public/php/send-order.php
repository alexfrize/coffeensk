<?php
	// header("Access-Control-Allow-Origin: *");
	// header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
	// header("Access-Control-Allow-Headers: Content-Type");
	
	$data = json_decode(file_get_contents("php://input"), true);
	$info = "Имя покупателя: ";
	$info .= $data['customerName'];
	$info .= "<br/>Телефон: ";
	$info .= $data['customerTel'];
	$info .= "<br/>Адрес: ";
	$info .= $data['customerAddr'];
	$info .= "<br/>---";	
	$info .= "<br/><strong>Информация о заказе: </strong>";
	foreach ($data['orderData'] as $item) {
		$info .= "<br/>Название: ";
		$info .= $item['title'];
		$info .= "<br/>Количество: ";
		$info .= $item['quantity'];
		$info .= "<br/>Вес: ";
		$info .= $item['weight'];
		$info .= "<br/>Цена: ";
		$info .= $item['price'];
		$info .= "<br/>---";	
	}
	$info .= "<br/>--------------------------<br/>";	
    file_put_contents('testfile.txt', $info, FILE_APPEND);

    $to = "alexander.frize@gmail.com, ";
		$to .= "2130675@bk.ru, ";
		$to .= "info@coffeensk.com";

    $subject = "CoffeeNsk - Заявка с сайта";
	
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: CoffeeNsk <noreply@coffeensk.ru>\r\n";

    mail($to, $subject, $info, $headers);
?>