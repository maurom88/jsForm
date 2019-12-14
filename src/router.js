'use strict';

let express = require('express');
let db = require('./db');

let router = express.Router();

function validateSubMiddleware(request, response, next) {
  // If we get an invalid form in `request.body` we want to respond with a 400 status code
  let form = request.body;
  if (!form.name) {
    response.status(400).send('"name" is a required field');
  } else if (!form.email) {
    response.status(400).send('"email" is a required field');
  } else if (!form.message) {
    response.status(400).send('"message" is a required field');
  } else {
    next();
  }
}

// Submit form
router.post('/contact_us', validateSubMiddleware, async function (request, response, next) {
  await db.addSub(request.body);
  response.sendStatus(201);
  next();
});

// Create a user
router.post('/register', function (request, response) {
  response.send('Registration complete!');
});

// Log in a user (create session)
router.post('/login', function (request, response) {
  response.send('Logged in!');
});

// Get a list of all submissions
router.get('/contact_subs', function (request, response, next) {
  response.send('You have a very long list of submissions!');
});

module.exports = router;