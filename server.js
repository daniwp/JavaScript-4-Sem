// Modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();



// DB Connection
var db = require('./config/config.db.js')('mongodb://localhost/clientkeeper');

// API routes
var jokeRoutes = require('./routes/route.jokes.js');
var apiRoutes = require('./routes/route.api.js');

// Define static root path
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up API endpoints
app.use('/api/jokes', jokeRoutes);
app.use('/api', apiRoutes);

module.exports = app;