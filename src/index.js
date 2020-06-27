'use strict';

const express = require('express');
const router = require('./router');
const cors = require('cors');
const mysql = require('mysql')

require('dotenv').config()

const app = express();

// db connection w/ env
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});



connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to database');
});
global.connection = connection;

// Apply middleware
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  }
}
app.use(cors(corsOptions))
app.use(express.json()) // Allows to read and write json files easily
app.use(router) // Apply router as middleware

// Error handler
app.use(function (error, request, response, next) {
  console.error(error);
  response.sendStatus(500); // "Internal Server Error"
});

// Server configuration
app.listen(process.env.PORT || 9000, () => console.log(`Server is running on port ${process.env.PORT || 9000}`));