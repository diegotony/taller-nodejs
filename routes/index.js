const express = require('express');
const app = express();

app.use(require('./user.js'));

module.exports = app;