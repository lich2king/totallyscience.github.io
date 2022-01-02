<?php
$pdo = require "connect.php";

$name = htmlspecialchars($_GET["name"]);
if(!$name) {
    die("?");
}

$select = $pdo->prepare("select * from reports where name=?");
$select->execute([$name]);
$report = $select->fetch();

if(!$report) {
    $pdo->prepare("insert into reports (name, count) values (?, 1)")->execute([$name]);
} else {
    $count = $report["count"] + 1;
    $pdo->prepare("update reports set count=? where id=?")->execute([$count, $report["id"]]);
}

echo("Success!");
?>