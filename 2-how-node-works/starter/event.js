const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("My name is Luka");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);
//event listeners around
////////////////////////////////////////

/// How to create server? || See down there
TODO: var server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  console.log(req.url);
  res.end("Request recieved");
});
server.on("request", (req, res) => {
  console.log("Another request");
});
server.on("close", () => {
  console.log("Server closed! ");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request....");
});
