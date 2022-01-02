<?php
$pdo = require "connect.php";

$newqueries = array(
    "views"   => "insert into games (name, views, reports) values (?, 1, 0)",
    "reports" => "insert into games (name, views, reports) values (?, 0, 1)"
);

$name = htmlspecialchars($_GET["name"]);
$type = htmlspecialchars($_GET["type"]);

if(!$name || !$type || !array_key_exists($type, $newqueries)) {
    die("?");
}

$select = $pdo->prepare("select * from games where name=?");
$select->execute([$name]);
$data = $select->fetch();

if(!$data) {
    $pdo->prepare($newqueries[$type])->execute([$name]);
} else {
    $count = $data[$type] + 1;
    echo($count);
    $pdo->prepare("update games set ?=? where id=?")->execute([$type, $count, $data["id"]]);
}

echo("Success!");
?>
