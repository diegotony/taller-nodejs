const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000

// ===========
// MiddleWare
//============
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(port, () => console.log(`running in the port ${port}`));