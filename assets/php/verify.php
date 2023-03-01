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

  $user = $data['auth']['username'];

  if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'"))
  {
    $row = $userresult -> fetch_row();

    $code = $row[4];

    $subCode = htmlspecialchars($_GET["code"]);

    if ($code == $subCode) {
      if ($conn->query("UPDATE accounts SET Code = '', Verified = true WHERE Username = '$user'")) {
        echo 'success';
      }
    }
  }
?>