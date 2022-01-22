bookmarkKeys();

function enterNewLink() {
    if (localStorage.getItem("bookmark") == null) {
        openInfoModal('Make sure you bookmark the page!');
        localStorage.setItem("bookmark", "true")
    } else {
        window.open("http://totallyscience.co", "_self")
    }

}

function bookmarkKeys() {
    if (navigator.platform.indexOf('Mac') > -1) {
        document.getElementById("bookmarkText").innerText = "Make sure you bookmark this tab by pressing CMD + D"
    }
}




function canAccessIFrame(elm) {
    var image = new Image();
    const url = elm.href

    image.onerror = function() {
        elm.style = "display: none"

        var pTag = document.createElement("p")
        var aTag = document.createElement("a")

        aTag.href = elm.href
        aTag.innerText = elm.innerText
        aTag.classList = "link x"
        pTag.appendChild(aTag)
        document.getElementById("linksText").appendChild(pTag)
            //elm.classList.add("x")
    };
    image.onload = function() {
        elm.classList.add("check")
    };
    image.src = `http://${url}/assets/images/logo.png`;
}


function sortBlocked() {
    const links = document.getElementsByClassName("link")

    Array.prototype.forEach.call(links, element => {
        canAccessIFrame(element)
    });
}

sortBlocked();