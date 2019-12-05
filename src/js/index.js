'use strict';

let server = require('./server');
let fs = require('fs');

// Test 1 - http://localhost:3000
server.get('/', function (request, response) {
  response.send('<h1>Hello world</h1>');
});

// Test 2 - Postman
let sendText = 'Hello to you'; // How to add new line?
server.post('/', function (request, response) {
  response.send(sendText + ', I\'m running on a server');
});

// Test 3 - append to file
server.patch('/add', function (request, response) {
  fs.appendFile('log.txt', sendText, function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
});

/* Routes */
// Submit form
server.patch('/submit', function (request, response) {
  fs.appendFile('static/submissions.json', 'new entry', function (err) {
    if (err) throw err;
    response.send('Form submitted!');
  });
});

// Create a user
server.patch('/register', function (request, response) {
  fs.appendFile('./static/users.json', 'new user', function (err) {
    if (err) throw err;
    response.send('Registration complete!');
  });
});

// Log in a user (create session)
//
// *** code here ***
//

// Get a list of all submissions
server.get('/submissions', function (request, response) {
  fs.readFile('static/submissions.json', (err, data) => {
    if (err) throw err;
    response.send('A very long list of submissions!');
    console.log(data); // How to encode data and return it in readable format?
  });
});