'use strict';

let express = require('express');
let server = require('./server');
let fs = require('fs');

let router = express.Router();

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
server.post('/add', function (request, response) {
  fs.appendFile('log.txt', sendText, function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
});

module.exports = router;