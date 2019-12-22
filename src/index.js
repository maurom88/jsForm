'use strict';

let express = require('express'); // Import express
let router = require('./router'); // Import router
var session = require('express-session');

let app = express();

// Apply middleware
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


app.get('/', function (req, res) {
  if (req.session.views) {
    req.session.views++;
    res.send("You visited this page " + req.session.views + " times");
  } else {
    req.session.views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

app.use(function (error, request, response, next) {
  console.error(error);
  response.sendStatus(500); // "Internal Server Error"
});

// Server configuration
let port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));