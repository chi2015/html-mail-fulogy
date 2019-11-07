<?php
	header('Content-type: text/html; charset=UTF-8');
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');


  
   $postData = file_get_contents('php://input');
   $req = json_decode($postData, true);
	$message = $req['message'];


	  $to = $req['email'];
      $subject = $req['subject'];
      
	  $headers = 'Content-Type: text/html; charset="UTF-8"'. "\r\n" .
	  "From: " .$email . "\r\n" .
    "Reply-To: " .$email. "\r\n" .
    'Content-Type: text/html; charset="UTF-8"'. "\r\n Content-Transfer-Encoding: 8bit" .
    'X-Mailer: PHP/' . phpversion();

	mail('florabah2@gmail.com', $subject, $message, $headers);

	if (mail($to, $subject, $message, $headers))
	{
		echo json_encode(array('status' => 'ok', 'req' => $req));
	}
	else
	{
		echo json_encode($postData);
	}

?>