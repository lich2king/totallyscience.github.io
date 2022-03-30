// DONE
window.addEventListener('load', () => {
    const websiteInput = document.getElementById('website');
    const themeInput = document.getElementById('theme');
    const disguiseInput = document.getElementById('disguise');
    
    websiteInput.value = localStorage.getItem('website');
    themeInput.value = localStorage.getItem('theme');
    disguiseInput.value = localStorage.getItem('disguise');
});

function savePrefs() {
    const websiteInput = document.getElementById('website');
    const themeInput = document.getElementById('theme');
    const disguiseInput = document.getElementById('disguise');
    const saveBtn = document.getElementById('save-button');

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
}