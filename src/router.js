'use strict';

let express = require('express');
let server = require('./server');
let fs = require('fs');

let router = express.Router();

/* Routes */
// For updating files:
// 1) Read whole file
// 2) Parse JSON
// 3) Add new entry to array from parsed JSON
// 4) Stringify back into JSON
// 5) Overwrite whole file with new JSON

// Submit form
server.post('/submit', function (request, response) {
  response.send('Form submitted!');
});

// Create a user
server.post('/register', function (request, response) {
  response.send('Registration complete!');
});

// Log in a user (create session)
server.post('/login', function (request, response) {
  response.send('Logged in!');
});

// Get a list of all submissions
server.get('/submissions', function (request, response) {
  response.send('You have a very long list of submissions!');
});

module.exports = router;