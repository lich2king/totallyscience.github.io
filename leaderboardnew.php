<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";



// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}





$query = "SELECT * FROM highscores";
$result = mysqli_query($conn, $query);

$highscores = array ();


while($row = mysqli_fetch_assoc($result))
{
  $game = $row["game"];
  $score = $row["score"];
  $name = $row["name"];

  array_push($highscores, array($game, $name, $score));
  
}

die(json_encode($highscores));    


   
$conn->close();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/leaderboardnew.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="searchDiv">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
    </div>

    <div id="highscores">
        

    </div>

    <?php include "assets/includes/footer.php" ?>



    <script>
    console.log("Here");
    window.open('leaderboardnew.php');
    fetch(`/leaderboardnew.php`).then((response) => response.text()).then((res) => {
        console.log(res);
        res = JSON.parse(res);

        const highscores = res;
        const scoresDiv = document.getElementById('highscores');

        for (score in highscores) {
            const highscoreDiv = `
            <div id="highscore">
            <div class="text">
                <h1>
                    ${highscores[score][0]}
                </h1>
                <h2>
                    ${highscores[score][2]}
                </h2>
                <p>
                    ${highscores[score][1]}
                </p>
            </div>
            <div class="image">
                <img src="http://localhost:3000/assets/game_images/2048.png">
            </div>
        </div>
        `;

            scoresDiv.appendChild(highscoreDiv);
        }
    });
    </script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>