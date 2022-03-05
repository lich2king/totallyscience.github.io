<?php
    $servername = "localhost";
    $username = "u483325885_client";
    $password = "Totally_password4321";
    $database = "u483325885_private";


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
        $payerId = $_POST['payer_id'];
        $reccuringId = $_POST['recurring_payment_id'];

		if ($paymentStatus == "Completed") {
            $conn = new mysqli($servername, $username, $password, $database);
      
            // Check connection
            if ($conn->connect_error) {
                die("connection failed"); //. $conn->connect_error);
            }

            if ($userresult = $conn->query("SELECT * FROM PersonalSites WHERE PayerId = '$payerId'"))
            {
                $row = $userresult -> fetch_row();
                $usersEndDate = $row[5];
                date_default_timezone_set("America/New_York");
                $d=strtotime("+1 Months");
                $endDate = date("Y-m-d", $d);   
                if($usersEndDate < $endDate){
                    $sql = "UPDATE PersonalSites SET EndDate='$endDate' WHERE PayerId='$reccuringId'";
    
                    if ($conn->query($sql) === TRUE) {
                        echo "Success";
                        //echo "New record created successfully";
                    } else {
                        //echo "Error: " . $sql . "<br>" . $conn->error;
                    }
                }
            }

               

            
    
            $conn->close();
		}
        else
        {
            
        }
	}








    


?>
