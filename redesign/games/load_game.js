const queryString = location.search
const urlParams = new URLSearchParams(queryString);
const gamesJSON = fetch("./games.json").then(response => response.json()).then(data => console.log(data))
