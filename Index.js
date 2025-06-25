const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Hello from WebSocket server!');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:3000');
