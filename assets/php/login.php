<?php

die("Hello Henrico");
$config = include "config.php";

$dsn = "mysql:dbname=" . $config["account_database"] . ";host=" . $config["host"];

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = new PDO($dsn, $config["account_username"], $config["password"], $options);


$user = htmlspecialchars($_GET["username"]);
$pass = htmlspecialchars($_GET["password"]);



$query = $pdo->prepare("select * from AccountsTable where Username=?");
$select->execute(["Zach"]);
$data = $select->fetch();

if(!$data) {
    die("Incorrect username or password");
} else {
    // Do stuff with $data["Username"] and $data["Password"]
    die("success")
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

/*$userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = 'Zach'");

if($userresult->num_rows == 0) {
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
/*if(!$username || !$password) {
    die("Incorrect args.");
}*/







?>