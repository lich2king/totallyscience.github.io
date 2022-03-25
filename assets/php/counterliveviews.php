<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";



// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

$query = "SELECT * FROM liveviews";
$result = mysqli_query($conn, $query);
$count = 0;

while($row = mysqli_fetch_assoc($result))
{
  if (date("d-m-Y h:i:s") - $row['lastping'] > 1) {
      $uid = $row['username'];
      $sql = "DELETE FROM liveviews WHERE username='$uid'";

      $conn->query($sql));
  }
  $count += 1;
}

echo($count);
    
$conn->close();


?>