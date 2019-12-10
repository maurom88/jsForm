'use strict';

let express = require('express'); // Import express
let router = require('./router'); // Import router
let errorHandler = require('./errorHandler'); // Import error handler

let app = express();

// Apply middleware
app.use(express.json());
app.use(router); // Apply router as middleware

// Default error handler
app.use(function (err, req, res, next) {
  errorHandler(err, res);
});

// for test purposes
//app.use('/src/test_routes', require('./test_routes'));