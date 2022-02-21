<?php
$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_accounts4321";
$database = "u483325885_accounts";

$step = htmlspecialchars($_GET["step"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if ($step == 1) {
    $user = htmlspecialchars($_GET["username"]);

    if ($userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = '$user'"))
    {
        $row = $userresult -> fetch_row();
    
        $from = "help@totallyscience.co";
        $to = $row[1];
        $subject = "Totally Science Change Password Confirmation";
        $code = rand(10000,99999);
        $message = "Your confirmation code is " . $code;
        $headers = "From:" . $from;

        $conn->query("UPDATE AccountsTable SET code = '$code' WHERE Username = '$user'");
    
        if (mail($to, $subject, $message, $headers)) {
            // email send client should show confirmation box
            echo "success";
        } else {
            echo "The email message was not sent.";
        }
    }
}
else if ($step == 2) {
    if ($userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = '$user'"))
    {
        $row = $userresult -> fetch_row();
    
        $code = $row[4];

        $subCode = htmlspecialchars($_GET["code"]);
    
        if ($code == $subCode) {
            echo 'success';
        }
    }
}
else if ($step == 3) {
    $user = htmlspecialchars($_GET["username"]);
    $pass = password_hash(htmlspecialchars($_GET["password"]), PASSWORD_DEFAULT);

    if ($conn->query("UPDATE AccountsTable SET Password = '$pass' WHERE Username = '$user'"))
    {
        echo $user;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Totally Science</title>
    
</head>

<body>
  <h1>feuw</h1>
</body>


<script>
    
</script>

</html>