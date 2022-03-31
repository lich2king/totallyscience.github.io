const express = require('express');
const app = express();
port = 3001;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});