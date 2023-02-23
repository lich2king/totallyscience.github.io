<?php
  // READY

  include 'config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
  
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $id = $data['auth']['id'];
  $from = "help@totallyscience.co";
  $subject = "Totally Science Confirmation Code";
  $code = rand(10000,99999);
  $message = "Your confirmation code is " . $code;
  $headers = "From:" . $from;

  if ($userresult = $conn->query("SELECT * FROM accounts WHERE id = '$id'"))
  {
    $row = $userresult -> fetch_row();

    $to = $row[1];

    $conn->query("UPDATE accounts SET code = '$code' WHERE id = '$id'");

    if (mail($to, $subject, $message, $headers)) {
      echo "Success";
    };
  }
?>