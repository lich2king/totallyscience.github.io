<?php
    session_start()
    
    $sessName = htmlspecialchars($_GET["sessname"]);

    die($_SESSION[$sessName])
?>