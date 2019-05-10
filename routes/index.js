const express = require('express');
const app = express();
app.use(require('./users.js'));
module.exports = app;