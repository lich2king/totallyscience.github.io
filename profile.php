<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <title>Profile - Totally Science - Free Online Unblocked Games</title>

    <link rel='stylesheet' href='assets/styles/profile.css?v11'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="accountoptions">
        <div class="accountoption" tooltip="Disabled for maintenence" flow="left">
            <p>Username: <span class="span" id="usernameSpan">username</span></p>
            <input type="image" src="assets/images/icons/edit.png">
        </div>

        <div class="accountoption" tooltip="Disabled for maintenence" flow="left">
            <p>Email: <span class="span" id="emailSpan">help@totallyscience.co</span></p>
            <input type="image" src="assets/images/icons/edit.png">
        </div>

        <div class="accountoption" tooltip="Disabled for maintenence" flow="left">
            <p>Password: <span class="span">*********</span></p>
            <input type="image" src="assets/images/icons/edit.png">
        </div>

        <div class="accountoption">
            <a class="logout" onclick="logout();">Logout</a>
        </div>
    </div>

    <div id="games"></div>

    <div id="highscores">
        <h1 class="label">Your Highscores</h1>
        <div class="highcontainer" id="highscorecontainer">
            <p style="display: none" id="noscores">You do not hold any highscores currently.</p>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/profile.js?v84"></script>
</body>

</html>
