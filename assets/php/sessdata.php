<?php
    session_start();

    $sessName = htmlspecialchars($_GET["sessname"]);

    echo($_SESSION[$sessName]);
?>