const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const commandsModule  = require('./modules/commandsModule');
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// });

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Messaging listening on port 3000');
});

io.on('connection', function(socket){
    console.log(socket.id + 'user connected');
    socket.on('disconnect', function(){
        console.log(socket.id + 'user disconnected');
    });
    socket.on(commandsModule().CREATE_USER, (data) => {
        console.log(data);
        if(data.command){
            newData = { 
                fromWSKey: 'from WS value',
                command: data.command
            }
            socket.emit('received', newData);
        }
    });
    setTimeout(function(){
        socket.emit('received', {everyOne: 'everyOne'});
    }, 5000);    
    socket.broadcast.emit('received', {broadcast: 'broadcast'});
    
});

// app.listen(3000, () => console.log('Messaging listening on port 3000'));
http.listen(3000, function(){
    console.log('listening on *:3000');
});