'use strict';

let express = require('express');
let app = express();

app.use('/src/routes', require('./routes'));

// for test purposes
//app.use('/src/test_routes', require('./test_routes'));