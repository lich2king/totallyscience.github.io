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
$select = $pdo->query("select name, count from reports");

while($report = $select->fetch()) {
    echo("<tr><td>" . $report["name"] . "</td><td>" . $report["count"] . "</td></tr>");
}
echo("</table>");
?>