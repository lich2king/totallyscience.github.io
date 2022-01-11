<?php
$config = include "config.php";

$dsn = "mysql:dbname=" . $config["database"] . ";host=" . $config["host"];

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = new PDO($dsn, $config["username"], $config["password"], $options);
return $pdo;
?>
