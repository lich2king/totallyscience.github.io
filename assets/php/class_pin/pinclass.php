<?php
  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed"); //. $conn->connect_error);
  }

  $gameName = htmlspecialchars($_GET["name"]);

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $userid = $data['auth']['id'];
  $query = "SELECT `PinnedGames` FROM `accounts` WHERE id='$userid'";
  $result = mysqli_query($conn, $query);
  $result = ($result -> fetch_row())[0];

  if (!function_exists('str_contains')) {
    function str_contains( $haystack, $needle) {
      return $needle !== '' && mb_strpos($haystack, $needle) !== false;
    }
  }

  if (str_contains($result, ";$gameName")) {
    //game is pinned
    echo('prevpinned');
  } else {
    //game is not pinned
    if (substr_count($result,";") < 3) {
      $pinnedString = "$result;$gameName";
      $query = "UPDATE `accounts` SET PinnedGames='$pinnedString' WHERE ID='$userid'";

      if ($conn->query($query) === TRUE) {
        die('successpinned');
      }
    } else {
      echo("maxpins");
    }
  }
    
  $conn->close();
?>