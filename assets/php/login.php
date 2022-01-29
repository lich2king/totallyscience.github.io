<?php
echo("0")
$config = include "config.php";
echo("1")
$dsn = "mysql:dbname=" . $config["account_database"] . ";host=" . $config["host"];
echo("6")
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
echo("7")
$pdo = new PDO($dsn, $config["account_username"], $config["password"], $options);
echo("9")

$user = htmlspecialchars($_GET["username"]);
$pass = htmlspecialchars($_GET["password"]);
echo("17")


$query = $pdo->prepare("select * from AccountsTable where Username=?");
$select->execute(["Zach"]);
$data = $select->fetch();
echo("155")
if(!$data) {
    die("Incorrect username or password");
} else {
    // Do stuff with $data["Username"] and $data["Password"]
    die("success");
}





?>