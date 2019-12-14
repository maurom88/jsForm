'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.readFile);

let dbSubPath = path.resolve('src/db/submissions.json');

// Read submissions
async function read() {
    let fileContents = await readFile(dbSubPath);
    let allSubmissions = JSON.parse(fileContents);
    return allSubmissions;
};

