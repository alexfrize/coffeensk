<?php 
header('Content-type: text/html; charset=utf-8');
$submited = false; 
if(isset($_POST['customerName']) && !isset($_COOKIE['requested'])){
    $str = date('d.m.Y h:i', time()).', ';
    foreach($_POST as $key => $val){
        $str .=  $key.': '.trim($val).', ';
    }

    $str .= "\r\n---\r\n";

    file_put_contents('customers.txt', $str, FILE_APPEND);

    //send e-mails
    
    $to = "alexander.frize@gmail.com, ";
    $to .= "2130675@bk.ru" ;

    $subject = "Заказ с сайта ".$_SERVER['SERVER_NAME'];
    $message = str_replace(', ', '<br/>', $str);
	
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: CoffeeNsk <noreply@coffeensk.ru>\r\n";

    mail($to, $subject, $message, $headers);

    setcookie('requested', true, time()+30);

    $submited = true;

    print_r($str); //
} 
?> 

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Благодарим за заявку!</title>
	
    <style>
        .body {
            background: #fdf8f2;
        }

        .complete {
            margin: 15% auto;
            font-family: Arial, verdana, sans-serif;
            font-size: 20px;
            text-align: center;
            display: block;
            width: 500px;
            height: 300px;
            background: #fdf8f2;
            color: #491404;
            border: 3px solid #491404;
        }

        .txt {
            display: block;
            margin-top: 120px;
            line-height: 1em;
        }
    </style>
</head>
<body>
	<div class="complete">
        <div class="txt">
    		Ваша заявка принята!<br><br>
    		С вами обязательно свяжутся в ближайшее время.
        </div>
	</div>
</body>
</html>