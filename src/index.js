'use strict';

let express = require('express'); // Import express
let router = require('./router'); // Import router

let app = express();

// Apply middleware
app.use(express.json()); // Allows to read and write json files easily
app.use(router); // Apply router as middleware

app.use(function (error, request, response, next) {
  console.error(error);
  response.sendStatus(500); // "Internal Server Error"
});

// Server configuration
let port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// for test purposes
//app.use('/src/test/test_routes', require('./test/test_routes'));