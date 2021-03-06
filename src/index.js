const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

io.on('connection', socket => {
  console.log('New websocket connection');

  socket.emit('message', 'Welcome!');

  socket.on('sendMessage', message => {
    io.emit('message', message);
  });
  // socket.emit('countUpdated', count);

  // socket.on('increment', () => {
  //   count++;
  //   io.emit('countUpdated', count);
  // });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
