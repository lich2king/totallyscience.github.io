<?php
    $sessName = htmlspecialchars($_GET["sessname"]);

    die($_SESSION[$sessName])
?>