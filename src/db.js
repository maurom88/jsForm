'use strict';

const util = require('util');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);
// const deleteFile = util.promisify(fs.unlink);

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
    const password = newUser.password1

    let emailQuery = `SELECT * FROM users WHERE Email = "${email}";`

    connection.query(emailQuery, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            //                                      //
            // add message for email already in db  //
            //                                      //
        } else {
            bcrypt.hash(password, 10, function (err, hash) { // hash password and write user to db

                const query = `INSERT INTO users (FirstName, LastName, Email, Password) VALUES ('` +
                    firstName + `', '` +
                    lastName + `', '` +
                    email + `', '` +
                    hash + `');`;

                connection.query(query, (err, result) => {
                    if (err) throw err;
                });
            });
        }
    });
}

// *** USERS READING AND WRITING END *** //

// *** PROJECTS READING FROM DB *** //
// Read list of projects
function readProjects(req, res) {
    const query = `select * from projects`;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
}

// *** PROJECTS READING FROM DB *** //
// Read list of jobs
function readJobs(req, res) {
    const query = `SELECT 
                        DATE_FORMAT(StartDate, "%M %Y") AS StartDate, 
                        DATE_FORMAT(EndDate, "%M %Y") AS EndDate, 
                        Title, Employer, City, Country
                    FROM jobs;`;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
}

module.exports = {
    addSub,
    readSubs,
    addUser,
    readUsers,
    readProjects,
    readJobs
};