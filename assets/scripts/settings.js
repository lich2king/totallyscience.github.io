const websiteInput = document.getElementById('website');
const saveBtn = document.getElementById('save-button');
const disguiseInput = document.getElementById('disguise');

websiteInput.value = localStorage.getItem('website');
disguiseInput.value = localStorage.getItem('disguise');

function submit() {
    let websiteEntered = websiteInput.value;
    let disguiseEntered = disguiseInput.value;

    localStorage.setItem("website", websiteEntered);
    localStorage.setItem("disguise", disguiseEntered);

    saveBtn.innerHTML = "Saved.";

    setTimeout(() => {
        saveBtn.innerHTML = "Save";
    }, 500);
}