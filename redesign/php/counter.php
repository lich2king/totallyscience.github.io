<?php
$pdo = require "connect.php";

$visits = $pdo->query("select visits from stats where id=1")->fetch()["visits"] + 1;
echo($visits);

$pdo->prepare("update stats set visits=? where id=1")->execute([$visits]);
?>