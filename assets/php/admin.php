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

echo("<h1>Live Viewers</h1><table><tr><th>Live Viewer Count</th></tr>");
$select = $pdo->query("select username, lastping from liveviews");

$liveViewerCount = 0;

while ($live = $select->fetch()) {
    if ($liveViewerCount == 1) {
      echo $live['lastping'];
    }
    $liveViewerCount += 1;
}

echo("<tr><td>" . $liveViewerCount . "</td></tr>");

echo("</table><h1>Game Stats</h1><table><tr><th>Game Name</th><th>Views</th><th>Reports</th></tr>");
$select = $pdo->query("select name, views, reports from games order by views desc");

while($game = $select->fetch()) {
    echo("<tr><td>" . $game["name"] . "</td><td>" . $game["views"] . "</td><td>" . $game["reports"] . "</td></tr>");
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
