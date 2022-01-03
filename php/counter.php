<?php
$pdo = require "connect.php";

$datetime = new DateTime("now", new DateTimeZone("America/New_York"));
$day = $datetime->format("M d Y");

$select = $pdo->prepare("select id, count from views where day=?");
$select->execute([$day]);
$data = $select->fetch();

if(!$data) {
    $pdo->prepare("insert into views (day, count) values (?, 1)")->execute([$day]);
    echo(1);
    exit;
} else {
    $count = $data["count"] + 1;
    $pdo->prepare("update views set count=? where id=?")->execute([$count, $data["id"]]);
    $total = $pdo->query("select sum(count) as total from views")->fetch()["total"];
    echo($total);
}
?>
