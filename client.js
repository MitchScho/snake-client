const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    
});
  //listner
  conn.on("connect", () => {
    console.log("We're connected!");
    conn.write("Name: Mit");
    // conn.write("Move: up");
    // const Interval1 = setInterval(() => {
    //   conn.write("Move: left");
    // }, 50);
    // setTimeout(() => {
      
    //   conn.write("Move: up");
    // }, 1000);
    // const Interval2 = setInterval(() => {
    //   conn.write("Move: left");
    // }, 50);
      
  });
    

  // data even we get the data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
