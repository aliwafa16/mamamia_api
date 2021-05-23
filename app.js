// Import module express
const express = require('express');

// Import module BodyParser
const bodyParser = require('body-parser');

// Import database
const database = require('./config/database');

// Import route
const router = require('./config/routes');

// inisiasi express
const app = express();

// parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => {
    console.log(`Server started on port`);
});