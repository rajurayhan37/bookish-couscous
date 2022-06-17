const express = require('express');
const userController = require('./controllers/users.controller');
const app = express();

app.get('/', (req, res)=>{
    res.send('This is the home route')
})

module.exports = app;