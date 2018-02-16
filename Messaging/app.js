const express = require('express');
const app = express();
const usersModule = require('./UsersModule.js');

app.get('/', (req, res) => {
   res.send('Messaging listening on port 3000');
});

app.get('/create-user', (req, res) => {
   usersModule.createUser(req, res);
});

app.get('/get-user', (req, res) => {
   usersModule.getUser(req, res);
});

app.listen(3000, () => console.log('Messaging listening on port 3000'));