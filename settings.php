<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/settings.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="settingoptions">
        <p>
            School Website
        </p>
        <input type="text" id="website" placeholder="Google.com">
        <p>
            Disguise Tab
        </p>
        <select name="disguise" id="disguise">
            <option value="none">None</option>
            <option value="gc">Google Classroom</option>
            <option value="gd">Google Docs</option>
            <option value="g">Google</option>
            <option value="canvas">Canvas</option>
            <option value="calc">Calculator</option>
            <option value="wiki">Wikipedia</option>
        </select>
        <br>
        <button id="save-button" onclick="submit()" class="regularButton"><span>Save</span></button>
    </div>


    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/settings.js"></script>
</body>

</html>