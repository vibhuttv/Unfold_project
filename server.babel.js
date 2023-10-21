// Import the 'fs' (file system) module to read a file.
var fs = require('fs');

// Read the contents of the .babelrc (Babel configuration) file.
var babelrc = fs.readFileSync('./.babelrc');

// Define a variable to store the Babel configuration.
var config;

// Try to parse the .babelrc file's contents as JSON and store it in the 'config' variable.
try {
  config = JSON.parse(babelrc);
} catch (err) {
  // If there's an error parsing the .babelrc file, log an error message.
  console.error('==> ERROR: Error parsing your .babelrc.');
  console.error(err);
}

// Require and use 'babel-register' to enable runtime transpilation of ES6/ES7 code in Node.js.
require('babel-register')(config);
