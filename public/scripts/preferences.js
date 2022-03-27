// DONE
const websiteInput = document.getElementById('website');
const themeInput = document.getElementById('theme');
const saveBtn = document.getElementById('save-button');
const disguiseInput = document.getElementById('disguise');

websiteInput.value = localStorage.getItem('website')
themeInput.value = localStorage.getItem('theme')
disguiseInput.value = localStorage.getItem('disguise')

document.getElementById('survey').addEventListener('submit', (e) => {
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
})