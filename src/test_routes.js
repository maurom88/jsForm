'use strict';

let express = require('express');
let server = require('./server');
let fs = require('fs');
let db = require('./test_db');

let router = express.Router();

// *** DB TEST START *** //
server.post('/car', async function (req, res, next) {
  // Add car to DB and send status code
  await db.addCar(req.body);
  res.sendStatus(201);
  next();
});
// *** DB TEST END *** //

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