<?php
  $password = htmlspecialchars($_GET["password"]);

  if ($password != "gaming123!") {
    die('failed');
  } else {
    echo "this doesn't happen yet.";
  }

?>