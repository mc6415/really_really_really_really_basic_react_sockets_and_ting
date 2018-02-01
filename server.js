const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


// Server port
const port = 1463;

const app = express();

// our server instance
const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('they left us :( ');
    })

    socket.on('change color', (color) => {
        io.sockets.emit('change color', color);
    })

});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
