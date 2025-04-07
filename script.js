// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // tu carpeta con HTML/CSS/JS

io.on('connection', (socket) => {
  console.log('Un usuario se conectó');

  socket.on('mensaje', (data) => {
    io.emit('mensaje', data); // reenviar a todos
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se desconectó');
  });
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});

