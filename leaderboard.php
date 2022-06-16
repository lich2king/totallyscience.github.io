<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        button {
            margin-left: 50%;
            transform: translate(-50%);
            cursor: pointer;
            background-color: var(--accent-color);
            color: var(--light-color);
            border: 2px;
            border-radius: 40px;
            font-family: 'Spline Sans', sans-serif;
            font-size: 30px;
            padding: 20px;
            margin-top: 80px;
        }
        
        @media (max-width: 675px) {
            button {
                margin-top: 110px;
            }
            table {
                width: 90% !important;
                margin-left: 5% !important;
            }
        }
        
        table {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 50%;
            margin-top: 40px;
            margin-bottom: 50px;
        }
        
        td,
        th {
            border: 1px solid black;
            padding: 8px;
        }

        tr {
            background-color: white;
        }
        
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        tr:hover {
            background-color: #ddd;
        }
        
        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: var(--accent-color);
            color: white;
        }
    </style>
</head>

<body>
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index">Home</a></div>
            <div class="nav-button"><a href="classes">Games</a></div>
            <div class="nav-button selected"><a href="">Leaderboard</a></div>
            <div class="nav-button"><a href="apps">Apps</a></div>
            <div class="nav-button"><a href="chat">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>

            <a id="settings" href="preferences"><img src="./assets/images/settings-light.svg"></img></a>
        </div>
    </div>

    <button onclick="window.open('uploadhighscore', '_self');">Submit a Highscore</button>

    <table id="scores">
        <tr>
            <th>Game</th>
            <th>Name</th>
            <th>Score</th>
        </tr>
    </table>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="assets/scripts/main.js"></script>
    <script>
        fetch(`assets/php/viewhighscores.php`).then((response) => response.text()).then((res) => {
            res = JSON.parse(res);
            
            const highscores = res;
            const scoresDiv = document.getElementById('scores');

            for (score in highscores) {
                let row = document.createElement('tr');
                let tGame = document.createElement('td');
                let tName = document.createElement('td');
                let tScore = document.createElement('td');

                tGame.innerText = highscores[score][0];
                tName.innerText = highscores[score][1];
                tScore.innerText = highscores[score][2];
                
                row.appendChild(tGame);
                row.appendChild(tName);
                row.appendChild(tScore);

                scoresDiv.appendChild(row);
            }
        });
    </script>
</body>

</html>