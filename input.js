

let connection;

const setupInput = function(conn) {
  connection = conn;
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
  if (key === "\u0003") {
    // CTRL + C special character code
    //If so terminate the game
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};

module.exports = setupInput;
