<?php
    die($_COOKIE('logintoken'));
    setcookie("logintoken", "", time() - 3600, "/");
    
?>