const websiteInput = document.getElementById('website');
const themeInput = document.getElementById('theme');
const saveBtn = document.getElementById('save-button');
const disguiseInput = document.getElementById('disguise');

websiteInput.value = localStorage.getItem('website');
themeInput.value = localStorage.getItem('theme');
disguiseInput.value = localStorage.getItem('disguise');

document.getElementById('survey').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`assets/php/cookiedata.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res);
        let loggedIn = false;

        if (res != null) {
            loggedIn = res["isLoggedIn"];
        } else {
            document.getElementById('errorText').innerHTML = "You must have an account to save. <a href='profilenew.php'>Click here</a>";
        }
        if (loggedIn == "true") {
            let websiteEntered = websiteInput.value;
            let themeEntered = themeInput.value;
            let disguiseEntered = disguiseInput.value;

            localStorage.setItem("website", websiteEntered);
            localStorage.setItem("theme", themeEntered);
            localStorage.setItem("disguise", disguiseEntered);

            saveBtn.innerHTML = "Saved.";

            setTimeout(() => {
                saveBtn.innerHTML = "Save";
            }, 500);
        } else {
            document.getElementById('errorText').innerHTML = "You must have an account to save. <a href='profilenew.php'>Sign up</a>";
        }
    });
})