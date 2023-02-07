<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        #survey {
            text-align: center;
        }
        
        #survey div {
            padding-bottom: 2vh;
        }
        
        #survey label {
            font-size: 1.1vw;
        }
        
        #survey input,
        #survey select {
            width: 21vw;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            background-color: var(--light-color);
            border: 2px solid var(--accent-color);
            border-radius: 4px;
            color: var(--dark-color);
            box-sizing: border-box;
            outline: none;
            font-size: 1vw;
            margin-bottom: 4vh;
        }
        
        #survey button {
            font-size: 1.5vw;
            width: 15vw;
            height: 8vh;
            color: var(--light-color);
            background-color: var(--accent-color);
            border: 0px;
            border-radius: 10px;
            margin-bottom: 2%;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index">Home</a></div>
            <div class="nav-button"><a href="classes">Games</a></div>
            <div class="nav-button"><a href="leaderboard">Leaderboard</a></div>
            <div class="nav-button"><a href="apps">Apps</a></div>
            <div class="nav-button"><a href="chat">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profile.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
            </a>

            <a id="settings" href="settings.php"><img src="./assets/images/settings-light.svg"></img>
            </a>
        </div>
    </div>

    <div style="padding-top: 90px;"></div>


    <form id="survey" action="javascript:SubmitHighscore()">
        <div>
            <label for="gamesSelect">What game is it for?</label><br>
            <select name="gamesSelect" id="gamesSelect">
            </select>
        </div>
        <div>
            <label for="score">What is your score?</label><br>
            <input type='text' id='scoreText' name='score' placeholder='100'><br>
        </div>
        <div>
            <label for="confirmpassword">Submit a screenshot of your score (Show full screen including top website bar otherwise INVALID)</label><br>
            <input id="fileUpload" type='file' />
        </div>
        <button id="save-button">Submit For Review</button>
        <p style="text-align: center; color: red;" id="errorText"></p>

    </form>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>



    <script>
        let imageFile = '';
        let username = ''

        window.addEventListener('load', function() {
            document.querySelector('input[type="file"]').addEventListener('change', function() {
                if (this.files && this.files[0]) {

                    const file = this.files[0]
                    const fileType = file['type'];
                    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
                    if (!validImageTypes.includes(fileType)) {
                        document.getElementById('errorText').innerText = "*You can only upload an image"
                        document.querySelector('input[type="file"]').value = null;
                        imageFile = "";
                    } else if (file.size > 1000000) {
                        document.getElementById('errorText').innerText = "*The file must be smaller than 10mb"
                        document.querySelector('input[type="file"]').value = null;
                        imageFile = "";
                    } else {
                        document.getElementById('errorText').innerText = ""
                        let imageBlob = URL.createObjectURL(file);
                        //imageFile = imageBlob;
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function() {
                            imageFile = reader.result
                            console.log(imageFile);
                        };
                        reader.onerror = function(error) {
                            console.log('Error: ', error);
                        };

                    }

                }
            });
        });


        async function SubmitHighscore() {
            const gameName = document.getElementById('gamesSelect').value
            const score = document.getElementById('scoreText').value
            document.getElementById('errorText').style.color = "red";

            if (username == '') {
                document.getElementById('errorText').innerHTML = "*You must <a href='./signup'>sign up</a> to submit a highscore"
            } else if (gameName == '') {
                document.getElementById('errorText').innerText = "*You must choose the game"
            } else if (score == '') {
                document.getElementById('errorText').innerText = "*You must state your score"
            } else if (imageFile == '' || document.getElementById("fileUpload").files.length < 1) {
                document.getElementById('errorText').innerText = "*You must upload a screen shot of your score"
            } else if (isNaN(score)) {
                document.getElementById('errorText').innerText = "*The score must be a number"
            } else {
                document.getElementById('errorText').innerText = ""
                    /*fetch(`./assets/php/submithighscore.php?username=${username}&game=${gameName}&score=${score}&imageFile=${imageFile}`).then((response) => response.text()).then((res) => {
                        if (res.toLowerCase().includes('success')) {
                            document.getElementById('errorText').style.color = "green";
                        }
                        console.log(res);
                        document.getElementById('errorText').innerHTML = res
                    });*/

                let data = {
                    username,
                    gameName,
                    score,
                    imageFile
                }
                data = JSON.stringify(data)

                result = await fetch('./assets/php/submithighscore.php', {
                    method: 'POST',
                    body: data
                }).then((response) => response.text()).then((res) => {
                    if (res.toLowerCase().includes('success')) {
                        document.getElementById('errorText').style.color = "green";
                    }
                    console.log(res);
                    document.getElementById('errorText').innerHTML = res;
                });


            }
        }

        function GetUser() {
            res = JSON.parse(authToken);

            if (res != "null") {
                res = JSON.parse(res);
                username = res["username"]
            } else {
                username = ""
            }
        }


        async function GetGames() {
            await fetch(`./assets/games.json?${new Date().getTime()}`)
                .then((response) => response.json())
                .then((games) => {
                    const gamesSelect = document.getElementById('gamesSelect')
                    for (const [name] of Object.entries(games)) {
                        const gameOp = document.createElement('option')
                        gameOp.value = name
                        gameOp.innerHTML = name

                        gamesSelect.appendChild(gameOp)
                    }
                })
        }


        GetGames();
        GetUser();
    </script>
</body>

</html>