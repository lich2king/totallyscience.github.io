<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css?v3'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div style="padding-top: 90px;"></div>

    <p style="text-align: center;">Already have an account? <a href="login.php">Login instead</a></p>
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
        <button class="button" id="save-button">Sign Up</button>
    </form>
    
    <p style="text-align: center; color: red;" id="errorText"></p>


    <!-- <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg> -->

    <div style="padding-bottom: 10vh;"></div>

    <?php include "assets/includes/footer.php" ?>

    <script>
        res = JSON.parse(authToken);

        let loggedIn = 'false';

        if (res != null) {
            loggedIn = res['isLoggedIn'];
        }
        if (loggedIn == 'true') {
            location.href = 'profile.php';
        }

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
            } else {
                errorText.innerText = '';
                const user = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const pass = document.getElementById('password').value;
                const grad = document.getElementById('gradSelect').value;

                fetch(`assets/php/signup.php?username=${user}&email=${email}&password=${pass}&gradyear=${grad}`).then((
                    response) => response.text()).then((res) => {
                    if (res == 'Success') {
                        errorText.style.color = 'green';
                        errorText.innerText = '*Account successfully created';

                        fetch(`assets/php/login.php?username=${user}&password=${pass}`).then((response) =>
                            response.text()).then((res) => {
                            if (res.startsWith('{')) {
                                document.cookie = 'logintoken=' + res;

                                location.href = 'profile.php';
                            }
                        });
                    } else {
                        errorText.innerText = res;
                    }
                });
            }
        }
    </script>
</body>

</html>
