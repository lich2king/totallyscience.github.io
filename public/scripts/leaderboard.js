fetch(`/leaderboardjson`).then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        console.log(`cannot fetch ./assets/leaderboard.json?date=${new Date().getTime()}`);
    }
}).then((leaders) => {
    const scoresDiv = document.getElementById('scores');

    for (leader in leaders) {
        let row = document.createElement('tr');
        let tGame = document.createElement('td');
        let tName = document.createElement('td');
        let tScore = document.createElement('td');
        tGame.innerText = leader;
        tName.innerText = leaders[leader].name
        tScore.innerText = leaders[leader].score
        row.appendChild(tGame);
        row.appendChild(tName);
        row.appendChild(tScore);

        scoresDiv.appendChild(row);
    }
}).catch((err) => {
    if (err) console.log(`cannot fetch ./assets/games.json?date=${new Date().getTime()}`);
});