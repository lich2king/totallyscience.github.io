fetch('./stats/counter.php')
    .then((response) => response.text())
    .then((visits) => {
        const display = document.getElementById("visits-count")
        display.innerText = visits
    })
