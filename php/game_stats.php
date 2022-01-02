<?php
$pdo = require "connect.php";

$newqueries = array(
    "views"   => "insert into games (name, views, reports) values (?, 1, 0)",
    "reports" => "insert into games (name, views, reports) values (?, 0, 1)"
);

$updatequeries = array(
    "views"   => "update games set views=? where id=?",
    "reports" => "update games set reports=? where id=?"
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
    $pdo->prepare($updatequeries[$type])->execute([$count, $data["id"]]);
}

echo("Success!");
?>
