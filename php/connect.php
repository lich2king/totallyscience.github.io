<?php
$host = "127.0.0.1";
$database = "u483325885_database";
$dsn = "mysql:dbname=$database;host=$host";
$user = "u483325885_user";
$pass = "Totally_password4321";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = new PDO($dsn, $user, $pass, $options);

return $pdo;
?>
