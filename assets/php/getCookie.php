<?php
    // READY
    $cookieName = htmlspecialchars($_GET["cookiename"]);

    if(!isset($_COOKIE[$cookieName])) {
        echo "null";
    } else {
        echo($_COOKIE[$cookieName]);
    }
?>