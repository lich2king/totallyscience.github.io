let numberOfScans = 1

//let firstHeading = document.getElementById("first-heading");

//console.log(firstHeading.getBoundingClientRect());

function isVisible(element) {
    let elementBox = element.getBoundingClientRect()
    let distanceFromTop = -100

    if (elementBox.top - window.innerHeight < distanceFromTop) {
        return true
    } else {
        return false
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden')
    sectionList.forEach(function (section) {
        if (isVisible(section)) {
            section.classList.remove('hidden')
            section.classList.add('text-fade')
        }
    })

    console.log(numberOfScans)
    numberOfScans++
}

document.addEventListener('scroll', _.throttle(scanDocument, 250))

// function throttle(fn, wait) {
//     var time = Date.now();
//     return function() {
//       if ((time + wait - Date.now()) < 0) {
//         fn();
//         time = Date.now();
//       }
//     }
//   }

//Code for scroll button
//Get the button
var mybutton = document.getElementById('scrollb')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
}
