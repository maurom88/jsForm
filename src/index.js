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
server.put('/add', function (request, response) {
  fs.appendFile('log.txt', sendText, function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
});

/* Routes */
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