const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const commandsModule = require('./modules/commandsModule');
var request = require('request');
var apiUrl = "http://localhost/websocket_apis";
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

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/', (req, res) => {
   res.send('Messaging listening on port 3000');
});

io.on('connection', function (socket) {
   console.log(socket.id + 'user connected');
   socket.on('disconnect', function () {
      console.log(socket.id + 'user disconnected');
   });
   socket.on(commandsModule().CREATE_USER, (data) => {
      console.log(data);
      if (data.command == commandsModule().CREATE_USER) {
         request.post(
            {
               url: apiUrl + '/signup.php',
               form: data
            }, function (requestErr, requestRes, requestBody) {
               sendToClient(socket, 'received', requestBody);
            }
         );
      }
   });
   socket.on(commandsModule().LOGIN_USER, (data) => {
      console.log(data);
      if (data.command == commandsModule().LOGIN_USER) {
         request.post(
            {
               url: apiUrl + '/signin.php',
               form: data
            }, function (requestErr, requestRes, requestBody) {
               sendToClient(socket, 'received', requestBody);
            }
         );
      }
   });
   socket.on(commandsModule().AUTO_SIGNING, (data) => {
      console.log(data);
      if (data.command == commandsModule().AUTO_SIGNING) {
         request.post(
            {
               url: apiUrl + '/auto_signing.php',
               form: data
            }, function (requestErr, requestRes, requestBody) {
               sendToClient(socket, 'received', requestBody);
            }
         );
      }
   });
});

function sendToClient(socket, channel, data) {
   socket.emit(channel, data);
}

http.listen(3000, function () {
   console.log('listening on *:3000');
});
// app.listen(3000, () => console.log('Messaging listening on port 3000'));