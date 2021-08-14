const io = require("socket.io-client");

export default class ExtClient {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.clientio = io(`http://${this.host}:${this.port}/`, {
      transports: ["websocket"],
      origins: "*",
    });

  }
  startlisten() {
    console.log("listening to server");
    // with acknowledgement
    this.clientio.on("message", (data) => {
      console.log("received: "+data);
      this.clientio.send("hi xddd");
    });
    this.clientio.on("connect", () => {
      console.log("connected!");
      this.clientio.send("hello there");
    });
  }
}
