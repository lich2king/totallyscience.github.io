<?php
 
//
// I feel there are never too many comments in code.  Maybe it's just me.
//
// Tom Donnelly, January 2016. covtom@gmail.com crazytom.com
//
// ------------------------------------------------------------------------------------
// IPN is PayPal's way of securely and reliably informing your website that you've had a transaction.
//
// If you want to offer instant access to digital downloads after payment, then you need to be informed as soon as the payment 
// has completed so that you don't keep your customer waiting when they automatically return to your site.  (You do have 
// Auto-Return set on in your PayPal Seller Preferences - right?   
//  
// "But if I have Auto Return to my 'success.php' page and Payment Data Transfer enabled in Seller Preferences, why do I need IPN?" I hear 
// you yell.  Good point. With these switched on, your client is automatically returned to your site after payment and you get confirmation 
// of the transaction.  But wait, there's more...  
//
// There are two main reasons to use IPN:
//
// 1. Auto-Return uses GET not POST to give you this data and it's easy to spoof
// 2. After completing payment on PayPal, your client may elect not to return to your website, or their connection breaks or a giant worm falls on their head
//
// So a sure-fire way of getting a reliable transaction confirmation in "real-time" from PayPal is via IPN.  In fact after purchase, PayPal
// issues a message saying "you will be returned .. in 10 seconds automatically".  There is a "go back now" button, but it's er.. "sluggish" to give
// time for the IPN to complete before returning the customer to your site.
//
// Paypal IPN calls a program (URI)on your site (which I have called listener.php) with an array of variables about the transaction as POST data.
// All we have to do is acknowledge the notification with an HTTP 200 response, extract the variables they send to us (to record our own confirmation
//  of the transaction) and return the same data back to PayPal via HTTP with the text "cmd=_notify-validate" added in front of the data they sent.
//
// This last bit is to check that PayPal was the sender of the IPN.  PayPal checks that this is data that it sent to us If we get a good response to that, 
// then it's authentic.
//
// How hard can it be?

//
// STEP 1 - be polite and acknowledge PayPal's notification
//

header('HTTP/1.1 200 OK');

//
// STEP 2 - create the response we need to send back to PayPal for them to confirm that it's legit
//

$resp = 'cmd=_notify-validate';
foreach ($_POST as $parm => $var) 
	{
	$var = urlencode(stripslashes($var));
	$resp .= "&$parm=$var";
	}
	
// STEP 3 - Extract the data PayPal IPN has sent us, into local variables 

  $item_name        = $_POST['item_name'];
  $item_number      = $_POST['item_number'];
  $payment_status   = $_POST['payment_status'];
  $payment_amount   = $_POST['mc_gross'];
  $payment_currency = $_POST['mc_currency'];
  $txn_id           = $_POST['txn_id'];
  $receiver_email   = $_POST['receiver_email'];
  $payer_email      = $_POST['payer_email'];
  $record_id	 	= $_POST['custom'];
  

// Right.. we've pre-pended "cmd=_notify-validate" to the same data that PayPal sent us (I've just shown some of the data PayPal gives us. A complete list
// is on their developer site.  Now we need to send it back to PayPal via HTTP.  To do that, we create a file with the right HTTP headers followed by 
// the data block we just createdand then send the whole bally lot back to PayPal using fsockopen


// STEP 4 - Get the HTTP header into a variable and send back the data we received so that PayPal can confirm it's genuine

$httphead = "POST /cgi-bin/webscr HTTP/1.0\r\n";
$httphead .= "Content-Type: application/x-www-form-urlencoded\r\n";
$httphead .= "Content-Length: " . strlen($resp) . "\r\n\r\n";
 
 // Now create a ="file handle" for writing to a URL to paypal.com on Port 443 (the IPN port)

$errno ='';
$errstr='';
 
$fh = fsockopen ('ssl://www.paypal.com', 443, $errno, $errstr, 30);

// STEP 5 - Nearly done.  Now send the data back to PayPal so it can tell us if the IPN notification was genuine
 
 if (!$fh) {
	$from = "help@totallyscience.co";
	$to = "zay0106@icloud.com";
	$subject = "YESSIRSKY";
	$message = "Connection FAILED?";
	$headers = "From:" . $from;


	if (mail($to, $subject, $message, $headers)) {
		// email send client should show confirmation box
		echo "success";
	} else {
		echo "The email message was not sent.";
	}
// Uh oh. This means that we have not been able to get thru to the PayPal server.  It's an HTTP failure
//
// You need to handle this here according to your preferred business logic.  An email, a log message, a trip to the pub..
           } 
		   
// Connection opened, so spit back the response and get PayPal's view whether it was an authentic notification		   
		   
else 	{
           fputs ($fh, $httphead . $resp);
		   while (!feof($fh))
				{
				$readresp = fgets ($fh, 1024);
				if (strcmp ($readresp, "VERIFIED") == 0) 
					{
						$from = "help@totallyscience.co";
						$to = "zay0106@icloud.com";
						$subject = "YESSIRSKY";
						$message = $item_name . $item_number . $payment_status . $payment_currency . $txn_id . $receiver_email . $payer_email . $record_id;
						$headers = "From:" . $from;


						if (mail($to, $subject, $message, $headers)) {
							// email send client should show confirmation box
							echo "success";
						} else {
							echo "The email message was not sent.";
						}
// 				Hurrah. Payment notification was both genuine and verified
//
//				Now this is where we record a record such that when our client gets returned to our success.php page (which might be momentarily
//  			(remember, PayPal tries to stall users for 10 seconds after purchase so the IPN gets through first) or much later, we can see if the
//				payment completed; and if it did, we can release the download.  You can go about this synchronisation between listener.php
//				and success.php in many different ways.  How you do it mostly depends on your need for security; but here is one way I do it:
//
//				When the client initiates the purchase by clicking the "buy" button, I write a new "unconfirmed" payment record in my Payments
//				table; this includes all the details of what they wish to purchase and their session-ID.  I then pass the record "id" of this pending entry in the CUSTOM
//				parameter to PayPal when it processes my site visitor tranaction.
//
//				After PayPal processes the transation, it doesn't return the client to your site immediately; it conveniently stalls them for around
//				10 seconds, during which it quickly calls your listener program (this program) to give it the good news.  I then extract the record_id
//				that was inserted in the Payments table database that was created just before the client was sent to PayPal, but now I know that
//				the payment is VERIFIED, so I can update the record in the PAYMENTS table from "Pending" to "Completed".
//
//				When (or if) the user returns to my "Auto Return" success.php page, I query the database for all "Completed" transactions with the
//				same Session_id, read the digital products that they have purchased and then release them as downloadable links in
//				success.php.
//
//				Yes, session_id is not totally reliable, but you could use cookies, or you could use a comprehensive user
//				registration, logon & password retrieval system that would give you the degree of "lock down" you require.  Your choice.
//
					}
 
				else if (strcmp ($readresp, "INVALID") == 0) 
					{
 
//  			Man alive!  A hacking attempt?
						$from = "help@totallyscience.co";
						$to = "zay0106@icloud.com";
						$subject = "YESSIRSKY";
						$message = "failed attempt!";
						$headers = "From:" . $from;


						if (mail($to, $subject, $message, $headers)) {
							// email send client should show confirmation box
							echo "success";
						} else {
							echo "The email message was not sent.";
						}
 
					}
				}
fclose ($fh);
		}
//
//
// STEP 6 - Pour yourself a cold one.
//
//
$from = "help@totallyscience.co";
						$to = "zay0106@icloud.com";
						$subject = "YESSIRSKY";
						$message = "Um idk mahn...";
						$headers = "From:" . $from;


						if (mail($to, $subject, $message, $headers)) {
							// email send client should show confirmation box
							echo "success";
						} else {
							echo "The email message was not sent.";
						}
?>