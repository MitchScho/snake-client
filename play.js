const setupInput = require("./input")
const connect = require("./client");

// setup interface to handle user input from stdin



console.log("Connecting ...");
connect();
setupInput();