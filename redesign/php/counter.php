<?php
$pdo = require "connect.php";

$datetime = new DateTime("now", new DateTimeZone("America/New_York"));
$day = $datetime->format("M d Y");

$select = $pdo->prepare("select id, count from stats where day=?");
$select->execute([$day]);
$data = $select->fetch();

if(!$data) {
    $pdo->prepare("insert into stats (day, count) values (?, 1)")->execute([$day]);
    echo(1);
    exit;
} else {
    $count = $data["count"] + 1;
    $pdo->prepare("update stats set count=? where id=?")->execute([$count, $data["id"]]);
    $total = $pdo->query("select sum(count) as total from stats")->fetch()["total"];
    echo($total);
}
?>