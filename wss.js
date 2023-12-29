const WebSocket = require("ws");
const wss = new WebSocket.Server();
//open the connection
wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`message received: ${event.data}`);
//if the client sends an event with the word "ping" the server will send back the response "pong"    
    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});
