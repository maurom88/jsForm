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
router.post('/contact', validateSubMiddleware, function (request, response) {
  db.addSub(request.body);
  response.sendStatus(201);
});

// Get a list of all submissions
router.get('/contact/list', db.readSubs);

// Create a user
router.post('/users/signup', function (request, response) {
  db.addUser(request.body);
  response.sendStatus(201);
});

// Get a list of all users
router.get('/users', db.readUsers);

// Get list of projects
router.get('/portfolio', db.readProjects);

// Get list of jobs
router.get('/resume', db.readJobs);

module.exports = router;