function dropDownFaq(id) {
    //first set all answers to display none
    //then set the element with the id of 'id' to display show
    const answers = document.getElementsByClassName("answer");

    let displaying = true;

    if (document.getElementById(id).getAttribute('style') == 'display: none') {
        displaying = false;
    }

    for (let i = 0; i < answers.length; i++) {
        answers[i].setAttribute("style", "display: none");
    }

    if (!displaying) {
        document.getElementById(id).setAttribute("style", "display:");
    }
}