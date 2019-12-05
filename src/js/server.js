' use strict';

/* Server initialization */
let express = require('express');
let app = express();
let port = 3000;

/* Server port handling */
app.listen(port, () => console.log(`Server is running on port ${port}`));

/* Export module for use in other files */
module.exports = app;