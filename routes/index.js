const express = require('express');
const app = express();

app.use(require('./user.js'));
app.use(require('./rol'));
app.use(require('./sala'));
module.exports = app;