require('dotenv').config()
const Server = require('./models/server')

const server = new Server();
server.listen();



/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
} )

app.listen(process.env.PORT, ()=> console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)) */