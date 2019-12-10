'use strict';

let express = require('express'); // Import express
let router = require('./router'); // Import router

let app = express();

// Apply middleware
app.use(express.json());
app.use(router); // Apply router as middleware

// Default error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  })

// for test purposes
//app.use('/src/test_routes', require('./test_routes'));