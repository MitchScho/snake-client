
const connect = require("./client");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //Listener : Receives data from function handle userInput
  stdin.on("data", handleUserInput);

  
  return stdin;
};

const handleUserInput = function (key) {
  //Check if CTRL + C 
  if (key === "\u0003") { // CTRL + C special character code
    //If so terminate the game
    process.exit();
  }
};


console.log("Connecting ...");
connect();
setupInput();