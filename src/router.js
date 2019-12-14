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
  fs.appendFile('db/submissions.json', 'new entry', function (err) {
    if (err) throw err;
    response.send('Form submitted!');
  });
});

// Create a user
server.post('/register', function (request, response) {
  fs.appendFile('./db/users.json', 'new user', function (err) {
    if (err) throw err;
    response.send('Registration complete!');
  });
});

// Log in a user (create session)
//server.post('/login', function (request, response) {
// *** code here ***
//});
//

// Get a list of all submissions
server.get('/submissions', function (request, response) {
  fs.readFile('db/submissions.json', (err, data) => {
    if (err) throw err;
    response.send('A very long list of submissions!');
    console.log(data); // How to encode data and return it in readable format?
  });
});

module.exports = router;