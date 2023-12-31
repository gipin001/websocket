// Import WebSocket library
const WebSocket = require('ws');

// Create a WebSocket Server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Define what should happen when a connection is established
wss.on('connection', (ws) => {
  console.log('New client connected');

  // Define what should happen when server receives a message
  ws.on('message', (message) => {
    console.log('Received: ' + message);
    
    // Broadcast the message back to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('Server says: ' + message);
      }
    });
  });

  // Send a welcome message to the client
  ws.send('Welcome new client!');
});