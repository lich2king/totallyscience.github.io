<?php
$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_password4321";
$database = "u483325885_accounts";

$user = htmlspecialchars($_GET["username"]);
$pass = htmlspecialchars($_GET["password"]);


// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


/*$result = $conn->query("SELECT * FROM AccountsTable WHERE Username = 'Zach'");
if (!$result) {
    die("error"); 
    echo 'Could not run query: ' . mysql_error();
    exit;
}
$row = mysql_fetch_row($result);

die($row[0]); // 42
echo $row[1]; // the email value*/

if ($userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = 'Zach'"))
{
    $row = $userresult -> fetch_row();
    die($row[2]);
    while ($row = $userresult -> fetch_row()) {
        printf ($row[2]);
    }
}

/*if($userresult->num_rows == 0) {
    // row not found, do stuff...
    die("not found");
} else {
    // do other stuff...
    //while ($row = $userresult -> fetch_row()) {
      //  die("%s (%s)\n", $row[0], $row[1]);
    //}
    //$row = mysql_fetch_row($userresult);
    
    die("jife");
        
}*/


$mysqli -> close();


?>