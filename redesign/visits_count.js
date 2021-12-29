fetch('./stats/counter.php')
    .then((response) => response.text())
    .then((visits) => {
        console.log(visits);
    })
