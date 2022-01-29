<?php
    $sessName = htmlspecialchars($_GET["sessname"]);

    echo($_SESSION[$sessName])
?>