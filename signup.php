<!DOCTYPE html>
<html lang="en">

<head>
    <title>Signup - Totally Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css?v3'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

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
            <label for="gradSelect">Graduation Year <span style="font-size: 10pt;">(Optional)</span></label><br>
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
        <p style="text-align: center;">Already have an account? <a href="login.php">Login instead</a></p>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>

    <?php include "assets/includes/footer.php" ?>

    <script>
    let token = JSON.parse(authToken);

    if (token) {
        location.href = 'profile.php';
    }

    async function SubmitSignUp() {
        const confirmpass = document.getElementById('confirmpassword').value;
        const user = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const grad = document.getElementById('gradSelect').value;
        const error = document.getElementById('errorText');

        error.innerText = '';

        let registerRes = await fetcher(`${activeServer}/auth/register`, {
            body: {
                username: user,
                email: email,
                password: pass,
                confirm_password: confirmpass,
                grad_year: grad
            }
        });

        if (registerRes.status == 200) {
            error.style.color = 'green';
            error.innerText = 'account successfully created';

            let loginRes = await fetcher(`${activeServer}/auth/login`, {
                body: {
                    username: user,
                    password: pass
                }
            });

            if (loginRes.status == 200) {
                let text = await loginRes.text();
                let authRecieved = JSON.parse(text);

                localStorage.setItem('authToken', JSON.stringify(authRecieved));

                location.href = 'profile.php';
            } else if (loginRes.status == 400) {
                let text = await loginRes.text();
                error.innerText = text;
            }
        }  else if (registerRes.status == 400) {
            let text = await registerRes.text();
            error.innerText = text;
        }
    }
    </script>
</body>

</html>