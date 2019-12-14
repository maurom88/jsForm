'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let dbSubPath = path.resolve('src/db/submissions.json');
let dbUsersPath = path.resolve('src/db/users.json');

// *** SUBMISSIONS READING AND WRITING START *** //
// Read submissions
async function readSubs() {
    let fileContents = await readFile(dbSubPath);
    let allSubmissions = JSON.parse(fileContents);
    return allSubmissions;
};

// Write the contents of submissions.json, replacing the entire file
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
    await writeSubs(allSubs);
};

// *** SUBMISSIONS READING AND WRITING END *** //

// *** USERS READING AND WRITING START *** //

// Read users
async function readUsers() {
    let fileContents = await readFile(dbUsersPath);
    let allUsers = JSON.parse(fileContents);
    return allUsers;
};

// Write the contents of users.json, replacing the entire file
async function writeUsers(dbItems) {
    let json = JSON.stringify(dbItems, null, 2);
    await writeFile(dbUsersPath, json);
}

// Write users
async function addUser(newSub) {
    // Step One: read db content
    let allUsers = await readUsers();
    // Step Two: add the new submission
    allUsers.push(newSub);
    // Step Three: rewrite db file with new content
    await writeUsers(allUsers);
};
// *** USERS READING AND WRITING END *** //

module.exports = {
    addSub: addSub,
    addUser: addUser,
};