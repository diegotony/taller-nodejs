const express = require('express');
const app = express();

app.use(require('./user.js'));
app.use(require('./rol'));
module.exports = app;