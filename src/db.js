'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);
let deleteFile = util.promisify(fs.unlink);

let dbUsersPath = path.resolve('src/db/users.json');

// *** PROJECTS READING FROM DB *** //
// Read list of projects : TODO

// *** SUBMISSIONS READING AND WRITING START *** //
// Read list of submissions
function readSubs(req, res, next) {
    const query = `select * from formsubs`;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
}

// Write submissions
function addSub(newSub) {
    const name = newSub.name;
    const email = newSub.email;
    const phone = newSub.phone;
    const subject = newSub.subject;
    const message = newSub.message;

    const query = `INSERT INTO formsubs (Name, Email, Phone, Subject, Message) VALUES ('` +
        name + `', '` +
        email + `', '` +
        phone + `', '` +
        subject + `', '` +
        message + `');`;

    connection.query(query, (err, result) => {
        if (err) throw err;
    });
}

// *** SUBMISSIONS READING AND WRITING END *** //

// *** USERS READING AND WRITING START *** //

// Read  list of users
function readUsers(req, res, next) {
    const query = `select FirstName, LastName, Email from users`;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
}

function addUser(newUser) {
    const firstName = newUser.firstName
    const lastName = newUser.lastName
    const email = newUser.email
    const password = newUser.password

    const query = `INSERT INTO users (FirstName, LastName, Email, Password) VALUES ('` +
    firstName + `', '` +
    lastName + `', '` +
    email + `', '` +
    password + `');`;

    connection.query(query, (err, result) => {
        if (err) throw err;
    });
}

// // Write the contents of users.json, replacing the entire file
// async function writeUsers(dbItems) {
//     let json = JSON.stringify(dbItems, null, 2);
//     await writeFile(dbUsersPath, json);
// }

// // Write users
// async function addUser(newSub) {
//     // Step One: read db content
//     let allUsers = await readUsers();
//     // Step Two: add the new submission
//     allUsers.push(newSub);
//     // Step Three: rewrite db file with new content
//     await writeUsers(allUsers);
// };

// *** USERS READING AND WRITING END *** //

module.exports = {
    addSub,
    readSubs,
    addUser,
    readUsers
};