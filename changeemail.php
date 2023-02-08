<?php
include 'assets/php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed");
}

$password = htmlspecialchars($_GET["password"]);
$newEmail = htmlspecialchars($_GET["email"]);

$json = file_get_contents('php://input');
$data = json_decode($json, TRUE);

if ($password != null && $password != '') {
    if (!isset($data['auth'])) {
        die("no cookie");
    }
      
    $id = $data['auth']['id'];
    
    if ($userresult = $conn->query("SELECT * FROM accounts WHERE id = '$id'")) {
        $row = $userresult -> fetch_row();
        $usersPass = $row[2];
        $usersSalt = $row[10];

        $password = $password.$usersSalt;

        if (password_verify($password, $usersPass)) {
            if ($userresult = $conn->query("SELECT * FROM accounts WHERE Email = '$newEmail'"))
            {
                if($userresult->num_rows == 0) {
                    //username is new
                    $conn->query("UPDATE accounts SET Email = '$newEmail' WHERE id = '$id'");
                    $conn->query("UPDATE accounts SET Verified = false WHERE id = '$id'");

                    $data = array(
                        'isLoggedIn' => 'true',
                        'username' => $row[0],
                        'email' => $row[1],
                        'id' => $row[7]
                    );
                
                    echo(json_encode($data));

                    echo 'success';
                } else {
                    //username is already taken
                    die('Email is already in use');
                }
            }
        }
        else {
            die("Invalid password");
        }
    }
    else {
        die("error reaching database");
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div style="padding-top: 90px;"></div>

    <form id="survey" action="javascript:newEmail()">
        <div>
            <label for="password">Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>

        <div>
            <label id="usertext" for="email">New Email</label><br>
            <input type='text' id='email' name='email' placeholder='John Doe'><br>
        </div>
        
        <button id="save-button">Submit</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <p style="text-align: center;" id="back-login"><a href="profile.php" style="color: var(--light-color)">Back to profile</a></p>
</body>

<?php include "assets/includes/footer.php" ?>

<script>
        res = JSON.parse(authToken);

        let loggedIn = 'false';

        if (res != null) {
            loggedIn = res['isLoggedIn'];
        }
        if (loggedIn != 'true') {
            location.href = 'profile.php';
        }

    function newEmail() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorText = document.getElementById('errorText');

        if (email == null || email == '' || password == null || password == '') {
            errorText.innerText = 'New email and password are required';
            return;
        }

        fetcher(`changeemail.php?password=${password}&email=${email}`).then((response) => response.text()).then((res) => {
            if (res.startsWith('{')) {
                localStorage.setItem('authToken', res);
                
                //add success message

                setTimeout(() => {
                    location.href = 'profile.php';
                }, 500);
            } else {
                errorText.innerText = res;
            }
        });
    }
</script>

</html>