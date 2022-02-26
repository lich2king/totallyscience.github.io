<?php
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://ipnpb.paypal.com/cgi-bin/webscr');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, "cmd=_notify-validate&" . http_build_query($_POST));
	$response = curl_exec($ch);
	curl_close($ch);

	if ($response == "VERIFIED") {
		$cEmail = $_POST['payer_email'];
		$name = $_POST['first_name'] . " " . $_POST['last_name'];

		$price = $_POST['mc_gross'];
		$currency = $_POST['mc_currency'];
		$item = $_POST['item_number'];
		$paymentStatus = $_POST['payment_status'];

		if ($paymentStatus == "Completed") {
			$from = "help@totallyscience.co";
            $to = "zay0106@icloud.com";
            $subject = "Interesante Ninja Warrior";
            $message = $paymentStatus . $cEmail . $name . $item . $price . $currency ;
            $headers = "From:" . $from;


            if (mail($to, $subject, $message, $headers)) {
                // email send client should show confirmation box
                echo "success";
            } else {
                echo "The email message was not sent.";
            }
		}
        else
        {
            $from = "help@totallyscience.co";
            $to = "zay0106@icloud.com";
            $subject = "Interesante Ninja Warrior";
            $message = $paymentStatus . $cEmail . $name . $paymentStatus . $price . $currency . $item;
            $headers = "From:" . $from;


            if (mail($to, $subject, $message, $headers)) {
                // email send client should show confirmation box
                echo "success";
            } else {
                echo "The email message was not sent.";
            }
        }
	}














?>
