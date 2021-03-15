const express = require('express');
const consign = require('consign');
// let routesIndex = require('./routes/index');
// let routesUsers = require('./routes/users');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

const host = "127.0.0.1";
const port = 3000;

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
