<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        .iframeloader {
            background: url(./assets/images/loadinggif.gif) center center no-repeat;
            background-size: 5vw;
        }
    </style>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div style="margin-top: 55px; overflow: hidden; height: 91vh; width: 100vw;">
        <iframe class="iframeloader" id="app_frame" style="border: none; position: relative; z-index: 2; overflow: hidden;" width=100% height=100% src=""></iframe>
    </div>

    <script src="assets/scripts/main.js?v27"></script>
    <script src="assets/scripts/app.js"></script>
</body>

</html>