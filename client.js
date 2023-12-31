// Import WebSocket library
const WebSocket = require('ws');

// Connect to the WebSocket Server
const ws = new WebSocket('ws://localhost:8080');

// Define what should happen when the connection is established
ws.on('open', () => {
  console.log('Connected to the server');
  
  // Send a message to the server
  ws.send('Hello, server!');
});

// Define what should happen when a message is received from the server
ws.on('message', (message) => {
  console.log('Received from server: ' + message);
});