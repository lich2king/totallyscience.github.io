const addSuffix = num => {
    if(num.endsWith('1')) {
        return num + 'st'
    } else if(num.endsWith('2')) {
        return num + 'nd'
    } else if(num.endsWith('3')) {
        return num + 'rd'
    }
    return num + 'th'
}

fetch('./stats/counter.php')
    .then((response) => response.text())
    .then((visits) => {
        const display = document.getElementById("visits-count")
        display.innerText = addSuffix(visits)
    })
