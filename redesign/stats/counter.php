<?php
$servername = "localhost";
$database = "u483325885_database";
$username = "u483325885_user";
$password = "Totally_password4321";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

$sql = "select visits from stats where id=1";
$result = $conn->query($sql);

if($result->num_rows > 0) {
    $visits_str = $result->fetch_assoc()["visits"];
    $visits = $visits_str + 1;
    echo($visits);

    $update_sql = "update stats set visits={$visits} where id=1";
    $conn->query($update_sql);
}

$conn->close();
?>
