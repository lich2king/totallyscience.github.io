<?php
// READY

include '../../assets/php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
}
  
$userid = json_decode($_COOKIE['logintoken'], true)['id'];

$query = "SELECT `LastPayment` FROM gamepass WHERE ID = '$userid'";
$result = mysqli_query($conn, $query);
$result = ($result -> fetch_row())[0];

$query = "SELECT `Monthly` FROM gamepass WHERE ID = '$userid'";
$monthly = mysqli_query($conn, $query);
$monthly = ($monthly -> fetch_row())[0];

date_default_timezone_set("America/New_York");
if($monthly == 1)
{
    $date = endCycle($result, 1);
    echo($result);
}else{
    $d=strtotime("+1 Years");
    $date = date($result, $d);
    echo($result);
}



function add_months($months, DateTime $dateObject) 
    {
        $next = new DateTime($dateObject->format('Y-m-d'));
        $next->modify('last day of +'.$months.' month');

        if($dateObject->format('d') > $next->format('d')) {
            return $dateObject->diff($next);
        } else {
            return new DateInterval('P'.$months.'M');
        }
    }

function endCycle($d1, $months)
    {
        $date = new DateTime($d1);

        // call second function to add the months
        $newDate = $date->add(add_months($months, $date));

        // goes back 1 day from date, remove if you want same day of month
        $newDate->sub(new DateInterval('P1D')); 

        //formats final date to Y-m-d form
        $dateReturned = $newDate->format('Y-m-d'); 

        return $dateReturned;
    }



$conn->close();

?>