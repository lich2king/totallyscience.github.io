// TODO: FORGOT PASSWORD
function SubmitSignup() {
    document.getElementById('save-button').disabled = true;

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const confpass = document.getElementById('confirmpassword').value;
    const email = document.getElementById('email').value;

    const errorText = document.getElementById('errorText');

    fetch(`/signup`, { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: user, password: pass, confirmPassword: confpass, email: email }) }).then((response) => response.text()).then((res) => {
        if (res == 'success') location.reload();

        errorText.innerText = ("*" + res);

        document.getElementById('save-button').disabled = false;
    });
}

function SubmitLogin() {
    document.getElementById('save-button').disabled = true;

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const errorText = document.getElementById('errorText');

    fetch(`/login`, { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: user, password: pass }) }).then((response) => response.text()).then((res) => {
        if (res == 'success') location.reload();

        errorText.innerText = ("*" + res);

        document.getElementById('save-button').disabled = false;
    });
}

function switchMode(type) {
    const mainDiv = document.getElementById('main');
    
    if (type == 'signup') {
        mainDiv.innerHTML = `
            <form id="survey" action="javascript:SubmitSignup()">
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
                <button id="save-button">Sign Up</button>
            </form>

            <p style="color: red;" id="errorText"></p>
            <p>Already have an account? <u onclick="switchMode('login')">Login instead</u></p>
        `;
    } else if (type == 'login') {
        mainDiv.innerHTML = `
            <form id="survey" action="javascript:SubmitLogin()">
                <div>
                    <label for="username">Username</label><br>
                    <input type='text' id='username' name='username' placeholder='John Doe'><br>
                </div>

                <div>
                    <label for="password">Password</label><br>
                    <input type='password' id='password' name='password' placeholder='**********'><br>
                </div>

                <button id="save-button">Sign In</button>
            </form>

            <p style="color: red;" id="errorText"></p>
            <p>Don't have an account? <u onclick="switchMode('signup')">Sign up instead</u></p>
            <!--<p style="text-align: center;">Forgot your password? <a href="changepassword.php">Change password</a></p>-->
        `;
    }
}

window.addEventListener('load', () => {
    switchMode('signup');
});