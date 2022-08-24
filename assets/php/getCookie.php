<?php
    // READY
    
    if(!isset($_COOKIE['logintoken'])) {
        echo "null";
    } else {
        echo($_COOKIE['logintoken']);
    }
?>