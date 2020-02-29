'use strict';

let express = require('express');
let router = require('./router');
let session = require('express-session');
let path = require('path');
let cors = require('cors');

let app = express();

// Initialize pug template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

// Apply middleware
app.use(cors());
app.use(express.json()); // Allows to read and write json files easily
app.use(router); // Apply router as middleware
// Session middleware
app.use(session({
  secret: 'f94toisadu44hj30',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 12000000,
  },
}));

// If username is undefined, the session hasn't been set
app.use(function (req, res, next) {
  if (req.session.username === undefined) {
    req.session.username = null;
  }
  next();
});

// Error handler
app.use(function (error, request, response, next) {
  console.error(error);
  response.sendStatus(500); // "Internal Server Error"
});

// Server configuration
let port = 9000;
app.listen(port, () => console.log(`Server is running on port ${port}`));