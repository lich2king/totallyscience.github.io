<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/profile.css?v4'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <h1 id="nameheader">
        Username
    </h1>

    <div id="accountoptions">
        <div class="accountoption">
            <p>Username: <span class="span" id="usernameSpan">username</span></p>
        </div>
        <div class="accountoption">
            <p>Email: <span class="span" id="emailSpan">help@totallyscience.co</span></p>
        </div>
        <div class="accountoption">
            <p>Password: <span class="span">*********</span></p>
            <input type="image" src="assets/images/icons/edit.png">
        </div>
        <div class="accountoption">
            <p>Game Pass: <span class="span">FREE</span></p>
            <input type="image" src="assets/images/icons/edit.png">
        </div>
        <div class="accountoption">
            <a class="logout" onclick="logout();">Logout</a>
        </div>
    </div>

    <div id="highscores">
        <h1 class="label">Your Highscores</h1>
        <div class="highcontainer">
            <div class="highscore">
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/70434/trophy-clipart-xl.png">
                <h1>Cookie Clicker</h1>
                <p>1,000,576</p>
            </div>
            <div class="highscore">
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/70434/trophy-clipart-xl.png">
                <h1>Cookie Clicker</h1>
                <p>1,000,576</p>
            </div>
        </div>
    </div>

    <div id="recents">
        <h1 class="label">Recent Games</h1>
        <div class="biccontainer">
            <div class="container">
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
            </div>
            <div id="arrow" onclick="window.open('gamesnew.php?category=recent', '_self')">
                <input type="image" src="assets/images/right-arrow.png" />
            </div>
        </div>
    </div>


    <div id="recents">
        <h1 class="label">Liked Games</h1>
        <div class="biccontainer">
            <div class="container">
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div id="gameDiv" onclick="">
                    <input type="image"
                        src="https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI" />
                    <div class="innerGameDiv">FNAF</div>
                </div>
            </div>
            <div id="arrow" onclick="window.open('gamesnew.php?category=recent', '_self')">
                <input type="image" src="assets/images/right-arrow.png" />
            </div>
        </div>
    </div>

    <div style="padding-bottom: 10vh;"></div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/profile.js"></script>
    <script>
        fetch(`assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
            // CHECK IF VERIFIED REQUIRE ENTER CODE IF NOT
            // HAVE RESEND EMAIL BUTTON
            res = JSON.parse(res)
            if (res != null) {
                const loggedIn = res['isLoggedIn'];
                const name = res['username'];
    
                if (loggedIn != 'true') {
                    location.href = 'signup.php';
                }
                
                fetch(`assets/php/verified.php`).then((response) => response.text()).then((verified) => {
                    if (!verified) {
                        location.href = 'verify.php';
                    }

                    document.getElementById('usernameSpan').innerText = name;
                    document.getElementById('emailSpan').innerText = res['email'];
                });
            } else {
                location.href = 'signup.php';
            }
        });
    
        function logout() {
            fetch(`assets/php/logout.php`).then(() => {
                location.href = 'login.php';
            });
        }
    </script>
</body>

</html>