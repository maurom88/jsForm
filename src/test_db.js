'use strict';

// These aren't in our package.json
// This is because they're built into Node.js
let util = require('util');
let fs = require('fs');
let path = require('path');

// Create versions of `fs` methods we'll be using to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// Declare where the DB path is relative from where our `package.json` is
let dbPath = path.resolve('src/test_db.json');

/**
 * Read the contents of db.json
 */
async function read() {
  let fileContents = await readFile(dbPath);
  let allCars = JSON.parse(fileContents); // Parse the buffer of JSON into a JS array
  return allCars;
}

// Alternative using `promise.then`
// async function read() {
//   return readFile(dbPath).then(function (fileContents) {
//     let allCars = JSON.parse(fileContents);
//     return allCars;
//   });
// }

/**
 * Write the contents of db.json, replacing the entire file
 */
async function write(dbItems) {
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
}

/**
 * Add an item to the DB using a combination of `read` and `write`
 */
async function addCar(newCar) {
  // Step One: Read the contents of the database
  let allCars = await read();
  // Step Two: Add the new car to what we get out of the database
  allCars.push(newCar);
  // Step Three: Write to our database all the cars plus the new one added (the value from step #2)
  await write(allCars);
}

// Alternative using `promise.then`
// async function addCar(newCar) {
//   return read().then(function (allCars) {
//     allCars.push(newCar);
//     return write(allCars);
//   });
// }

// Export the read and addItem functions, but not `write` as that's internal
module.exports = {
  addCar: addCar,
};
