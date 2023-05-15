<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <title>Login - Totally Science - Free Online Unblocked Games</title>

    <link rel='stylesheet' href='./assets/styles/account.css?v1'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <form id="survey" action="javascript:SubmitLogin()">
        <div>
            <label for="username">Username</label><br>
            <input type='text' id='username' name='username' placeholder='John Doe'><br>
        </div>

        <div>
            <label for="password">Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>

        <button class="button" id="save-button">Sign In</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <p style="text-align: center;">Don't have an account? <a href="signup.php">Sign up instead</a></p>

    <?php include "assets/includes/footer.php" ?>
    
    <script>
        let inProgress = false;

        window.addEventListener('load', async () => {
            let response = await fetcher(`/auth/check`);
            let result = await response.text();

            if (result == 'A token is required for authentication' || result == 'Invalid Token') {
                
            } else {
                location.href = 'profile.php';
            }
        });
    
        async function SubmitLogin() {
            if (inProgress) return;

            inProgress = true;

            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            const errorText = document.getElementById('errorText');

            let loginRes = await fetcher(`/auth/login`, { body: { username: user, password: pass } });

            if (loginRes.status == 200) {
                errorText.style.color = 'green';
                errorText.innerText = 'success';

                setTimeout(() => {
                    location.href = 'profile.php';
                }, 500);
            } else {
                errorText.innerText = await loginRes.text();

                inProgress = false;
            }
        }
    </script>
</body>

</html>