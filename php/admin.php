<style>
* {
  font-family: arial, sans-serif;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

<?php
$pdo = require "connect.php";

$pass = htmlspecialchars($_GET["password"]);
if(!$pass || $pass != "Totally_admin4321") {
    die("Incorrect password.");
}

echo("<h1>Reports</h1><table><tr><th>Game</th><th>Count</th></tr>");
$select = $pdo->query("select name, count from reports order by count desc");

while($report = $select->fetch()) {
    echo("<tr><td>" . $report["name"] . "</td><td>" . $report["count"] . "</td></tr>");
}

echo("</table><h1>Daily Homepage Visits (does not include games)</h1><table><tr><th>Day</th><th>Count</th></tr>");
$select = $pdo->query("select day, count from views");
$total = $pdo->query("select sum(count) as total from views")->fetch();
$datedata = "";
while($day = $select->fetch()) {
    $datedata = "<tr><td>" . $day["day"] . "</td><td>" . $day["count"] . "</td></tr>" . $datedata;
}
$datedata = "<tr><td>Total</td><td>" . $total["total"] . "</td></tr>" . $datedata;
echo($datedata);
echo("</table>");
?>
