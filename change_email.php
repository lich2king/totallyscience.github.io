<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css?v4'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <form id="survey" action="javascript:changeEmail()">
        <div>
            <label for="password">Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>

        <div>
            <label id="usertext" for="email">New Email</label><br>
            <input type='text' id='email' name='email' placeholder='John Doe'><br>
        </div>
        
        <button class="button" id="save-button">Submit</button>
        <br>
        <a href="profile.php" id="back-login">Back to profile</a>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
</body>

<?php include "assets/includes/footer.php" ?>

<script>
    let token = JSON.parse(authToken);

    // redirect to signup page if user is not logged in
    if (!token) {
        location.href = 'signup.php';
    }

    
    async function changeEmail() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const error = document.getElementById('errorText');

        let res = await fetcher(`${activeServer}/auth/change/email`, { body: { email: email, password: password } });
        let text = await res.text();

        if (res.status == 200) {
            localStorage.setItem('authToken', text);
            
            // display success message to user
            error.style.color = 'green';
            error.innerText = 'success';

            setTimeout(() => {
                location.href = 'profile.php';
            }, 500);
        } else if (res.status == 400) {
            error.innerText = text;
        }
    }
</script>

</html>