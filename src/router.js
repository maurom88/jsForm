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
router.post('/contact/post', validateSubMiddleware, async function (request, response, next) {
  await db.addSub(request.body);
  response.sendStatus(201);
  next();
});

// Get a list of all submissions
//  router.get('/contact/list', readSubs);
router.get('/contact/list', db.readSubs);

// Create a user
router.post('/user/register', async function (request, response, next) {
  await db.addUser(request.body);
  response.sendStatus(201);
});

module.exports = router;