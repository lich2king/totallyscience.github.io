<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css'>
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
            <a id="login" href="profilenew.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>

            <a id="settings" href="preferences"><img src="./assets/images/settings-light.svg"></img></a>
        </div>
    </div>

    <div style="padding-top: 90px;"></div>

    <form id="survey" action="javascript:SubmitSignUp()">
        <div>
            <label for="username">Username</label><br>
            <input type='text' id='username' name='username' placeholder='John Doe'><br>
        </div>
        <div>
            <label for="email">Email</label><br>
            <input type='text' id='email' name='email' placeholder='jdoe@totallyscience.com'><br>
        </div>
        <div>
            <label for="password">Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>
        <div>
            <label for="confirmpassword">Confirm Password</label><br>
            <input type='password' id='confirmpassword' name='confirmpassword' placeholder='**********'><br>
        </div>
        <div>
            <label for="gradSelect">Graduation Year <span style="font-size: 1.25vw;">(Optional)</span></label><br>
            <select name="gradSelect" id="gradSelect">
                    <option value=""></option>
                    <option value="22">2022</option>
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                    <option value="24">2024</option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                    <option value="29">2029</option>
                    <option value="30">2030</option>
                    <option value="31">2031</option>
                    <option value="32">2032</option>
                    <option value="33">2033</option>
                    <option value="34">2034</option>
                    <option value="Other">Other</option>
                </select>
        </div>
        <button id="save-button">Sign Up</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <p style="text-align: center;">Already have an account? <a href="login.php">Login instead</a></p>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="./assets/scripts/main.js"></script>
    <script>
        fetch(`assets/php/cookiedata.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
            res = JSON.parse(res);

            let loggedIn = 'false';

            if (res != null) {
                loggedIn = res['isLoggedIn'];
            }
            if (loggedIn == 'true') {
                location.href = 'profilenew.php';
            }
        });

        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };

        async function containsHash() {
            user = document.getElementById('username').value;
            email = document.getElementById('email').value;
            pass = document.getElementById('password').value;

            if (user.includes('#') || email.includes('#') || pass.includes('#')) return true;

            return false;
        };

        async function userTaken() {
            user = document.getElementById('username').value;
            email = document.getElementById('email').value;
            pass = document.getElementById('password').value;
            grad = document.getElementById('gradSelect').value;

            return await fetch(`assets/php/signup.php?username=${user}&email=${email}&password=${pass}&gradyear=${grad}&uservalid=0&emailvalid=0`).then((response) => response.text()).then((res) => {
                return res == 'found';
            });
        };

        async function emailTaken() {
            user = document.getElementById('username').value;
            email = document.getElementById('email').value;
            pass = document.getElementById('password').value;
            grad = document.getElementById('gradSelect').value;

            return await fetch(`assets/php/signup.php?username=${user}&email=${email}&password=${pass}&gradyear=${grad}&uservalid=1&emailvalid=0`).then((response) => response.text()).then((res) => {
                return res == 'found';
            });
        };

        async function SubmitSignUp() {
            const user = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const pass = document.getElementById('password').value;
            const confirmpass = document.getElementById('confirmpassword').value;
            const errorText = document.getElementById('errorText');
            const grad = document.getElementById('gradSelect').value;

            if (user == '') {
                errorText.innerText = '*Missing username';
            } else if (email == '') {
                errorText.innerText = '*Missing email';
            } else if (pass == '') {
                errorText.innerText = '*Missing password';
            } else if (confirmpass == '') {
                errorText.innerText = '*Missing password confirmation';
            } else if (confirmpass != pass) {
                errorText.innerText = `*Passwords don't match`;
            } else if (!validateEmail(email)) {
                errorText.innerText = '*Email is not valid';
            } else if (await containsHash()) {
                errorText.innerText = '*You cannot use a #';
            } else if (pass.length < 5) {
                errorText.innerText = '*Password must be at least 5 characters';
            } else if (await userTaken()) {
                errorText.innerText = '*Username is taken';
            } else if (await emailTaken()) {
                errorText.innerText = '*Email is taken';
            } else {
                errorText.innerText = '';
                const user = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const pass = document.getElementById('password').value;
                const grad = document.getElementById('gradSelect').value;

                fetch(`assets/php/signup.php?username=${user}&email=${email}&password=${pass}&gradyear=${grad}&uservalid=1&emailvalid=1`).then((response) => response.text()).then((res) => {
                    if (res == 'Success') {
                        errorText.style.color = 'green';
                        errorText.innerText = '*Account successfully created';

                        fetch(`assets/php/login.php?username=${user}&password=${pass}`).then((response) => response.text()).then((res) => {
                            if (res == 'Success') {
                                location.href = 'profilenew.php';
                            }
                        });
                    } else {
                        errorText.innerText = '*Error creating account';
                    }
                });
            }
        }
    </script>
</body>

</html>