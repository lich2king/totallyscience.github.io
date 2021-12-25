//Code for sorting the order of the game buttons
//Get list of each name
var names = document.getElementsByClassName("sortGame")
var namesSorted = []
for (i = 0; i < names.length; i++) {
    namesSorted.push(names[i].getAttribute("name"))
}
//Sort list
namesSorted.sort()
//For each name in list:
//Find div by name element
//Create new div with values from div with name element
//append new div to larger div
namesSorted.forEach(element => {
    //get first letter of string (element is the name of the game)
    var sectionId = element[0].toLowerCase()
    //check if there is already a section with the id
    var possibleSection = document.getElementById(sectionId)
    if (possibleSection != null) {
        //add to an existing section
        var mainSection = document.getElementById(sectionId)
        var mainDiv = document.getElementById('sortedGames')
        var b = document.createElement('button')
        var oldButton = document.getElementsByName(element)[0]
        b.classList = oldButton.classList
        b.classList.add("gameButton")
        b.classList.remove("sortGame")
        b.name = oldButton.name
        var image = document.createElement('img')
        image.src = oldButton.getElementsByTagName('img')[0].src
        var insideDiv = document.createElement('div')
        var insideP = document.createElement('p')
        var insideP2 = document.createElement('p2')
        insideP.innerText = oldButton.getElementsByTagName('p')[0].innerText
        insideP2.innerText = oldButton.getElementsByTagName('p2')[0].innerText

        mainDiv.appendChild(mainSection)
        mainSection.appendChild(b)
        b.appendChild(image)
        b.appendChild(insideDiv)
        insideDiv.appendChild(insideP)
        insideDiv.appendChild(insideP2)
    }
    else {
        //create a new section
        var mainDiv = document.getElementById('sortedGames')
        var mainSection = document.createElement('section')
        mainSection.id = sectionId
        var b = document.createElement('button')
        var oldButton = document.getElementsByName(element)[0]
        b.classList = oldButton.classList
        b.classList.add("gameButton")
        b.classList.remove("sortGame")
        b.name = oldButton.name
        var image = document.createElement('img')
        image.src = oldButton.getElementsByTagName('img')[0].src
        var insideDiv = document.createElement('div')
        var insideP = document.createElement('p')
        var insideP2 = document.createElement('p2')
        insideP.innerText = oldButton.getElementsByTagName('p')[0].innerText
        insideP2.innerText = oldButton.getElementsByTagName('p2')[0].innerText

        mainDiv.appendChild(mainSection)
        mainSection.appendChild(b)
        b.appendChild(image)
        b.appendChild(insideDiv)
        insideDiv.appendChild(insideP)
        insideDiv.appendChild(insideP2)
    }

});
//Hide the unsorted game div
var unsortedGames = document.getElementById("unsortedGames")
unsortedGames.parentNode.removeChild(unsortedGames);

//scroll to section on click of letter
window.addEventListener('DOMContentLoaded', (event) => {
    //add event listener to every element in the document with the class "letter"
    document.querySelectorAll(".letter").forEach(letter => {
        letter.addEventListener('click', function (e) {
            var letter = e.target.innerText.toLowerCase()
            var section = document.getElementById(letter)
            var sectionBox = section.getBoundingClientRect();
            //-90 acts as an offsett so the top button isn't off screen
            var scroll = window.scrollY + sectionBox.top - 90
            window.scrollTo({ top: scroll, behavior: "smooth" });
        });
    });
});


//game catagories
//selected topic variable is used both in the button category changer and the search bar function
var selectedTopic = "all"

window.addEventListener('DOMContentLoaded', (event) => {
    //add event listener to every element in the document with the class "categoryButton"
    document.querySelectorAll(".categoryButton").forEach(button => {
        button.addEventListener('click', function (e) {
            selectedTopic = e.target.name
            var buttons = document.getElementsByClassName('categoryButton');
            var games = document.getElementsByClassName('gameButton');
            console.log(games)
            for (i = 0; i < buttons.length; i++) {
                var name = buttons[i].getAttribute("name");
                if (selectedTopic == name) {
                    buttons[i].classList.add('selectedbutton');
                    buttons[i].classList.remove('selectbutton');
                }
                else {
                    buttons[i].classList.remove('selectedbutton');
                    buttons[i].classList.add('selectbutton');
                }
            }
            for (i = 0; i < games.length; i++) {
                if (games[i].classList.contains(selectedTopic)) {
                    games[i].style.display = "";
                }
                else {
                    games[i].style.display = 'none';
                }
            }
        });
    });
});

//game search
function searchFunction() {
    var input = document.getElementById('searchBar').value;
    input = input.toUpperCase();
    var gameButtons = document.getElementsByClassName('gameButton');
    for (i = 0; i < gameButtons.length; i++) {
        var gameName = gameButtons[i].getAttribute("name");
        if (gameName.toUpperCase().indexOf(input) > -1) {
            if (gameButtons[i].classList.contains(selectedTopic)) {
                gameButtons[i].style.display = "";
            }
            else {
                gameButtons[i].style.display = 'none';
            }
        }

        else {
            gameButtons[i].style.display = 'none';
        }
    }
}