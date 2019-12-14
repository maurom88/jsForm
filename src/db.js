'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.readFile);

let dbSubPath = path.resolve('src/db/submissions.json');
//let dbUsersPath = path.resolve('src/db/users.json');

// Read submissions
async function readSubs() {
    let fileContents = await readFile(dbSubPath);
    let allSubmissions = JSON.parse(fileContents);
    return allSubmissions;
};

// Write the contents of db.json, replacing the entire file
async function writeSubs(dbItems) {
    let json = JSON.stringify(dbItems, null, 2);
    await writeFile(dbSubPath, json);
}

// Write submissions
async function addSub(newSub) {
    // Step One: read db content
    let allSubs = await readSubs();
    // Step Two: add the new submission
    allSubs.push(newSub);
    // Step Three: rewrite db file with new content
    await writeFile(allSubs);
};

module.exports = {
    addSub: addSub,
};