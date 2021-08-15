const io = require("socket.io-client");

let host, port, client_io;

function start_listen() {
  client_io = io(`http://${this.host}:${this.port}/`, {
    transports: ["websocket"],
    origins: "*",
  });

  // with acknowledgement
  client_io.on("message", (data) => {
    console.log("Received: " + data);
    client_io.send("hi xddd");
  });

  client_io.on("connect", () => {
    console.log("Connected!");
    client_io.send("hello there");
  });
}

export default { host, port, start_listen };
