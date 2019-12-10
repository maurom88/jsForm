'use strict';

let express = require('express'); // Import express
let router = require('./router'); // Import router
// let errorHandler = require('./errorHandler'); // Import error handler

let app = express();

// Apply middleware
app.use(express.json()); // Allows to read and write json files easily
app.use(router); // Apply router as middleware

// Default error handler
// To be used with imported error handler
// app.use(function (error, req, res, next) {
//   errorHandler(error, res);
// });
app.use(function (error, req, res, next) {
  console.error(error); // We have this here so we can see any errors that happened in our console for debugging purposes
  res.sendStatus(500); // We send a 500 status code to indicate there has been an "Internal Server Error"
});

// for test purposes
//app.use('/src/test_routes', require('./test_routes'));