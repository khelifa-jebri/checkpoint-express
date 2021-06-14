const express = require('express');
const path = require('path');
const timeOfService = require('./timeOfService');

const app = express();

const port = 5000;

app.use(express.json());
//app.use(timeOfService)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.listen(port, (err) => {
    if (err) throw err;
    else console.log("SERVER IS UP AND RUNNING ...")
})