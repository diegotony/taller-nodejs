const express = require('express');
const app = express();

app.get('/usuario', (req, res) => {
    res.send('Hello world');
});

module.exports = app;