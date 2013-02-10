var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    port = process.env.PORT || 5000;

server.listen(port);

app.use('/vendor', express.static(__dirname + '/vendor'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    console.log(socket.id, 'connected');
});

console.log('Server listening at port', port);
