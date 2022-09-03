<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/gamepass.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body id="mainBody">
    <?php include "assets/includes/navbar.php" ?>


    <div class="thankyou-container">
        <h1>Thank you for your purchase.</h1>
        <p>You can visit the <a href="profile.php">account page</a> at any time to check the status of your order.</p>
        <p>Before accessing Game Pass features, you must <a href="login.php">login</a> again.</p>
    </div>

    <script>
        fetch(`assets/php/logout.php`);
    </script>
</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/main.js"></script>

</html>