const addSuffix = (num) => {
    if (num.endsWith('1')) {
        return num + 'st'
    } else if (num.endsWith('2')) {
        return num + 'nd'
    } else if (num.endsWith('3')) {
        return num + 'rd'
    }
    return num + 'th'
}

fetch('96.248.67.70/totallyscience-backend/counter.php')
    .then((response) => response.text())
    .then((visits) => {
        const display = $('visits-count')

        if (visits.includes('<?php')) {
            display.innerText = '(cannot access locally)'
            return
        }
        display.innerText = addSuffix(visits)
    })
