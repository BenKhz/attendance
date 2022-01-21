const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const servUtils = require('./utils.js')
const dbUtils = require('./db/utils')
const authUtils = require('./db/authUtils')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors())
app.use(express.json());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))

app.use(express.static('dist'));

app.get('/enroll', (req, res) => {
  var enroll = require('./lib/hrlax4849')
  res.status(200).send(enroll)
})

app.post('/webhook', (req, res) => {
  var {participant} = req.body.payload.object;
  wss.emit('hook', wss.clients, participant)
  res.status(200).send("Posted to /webhook!")
})

// Initialize server
var server = app.listen(PORT, (err) => {
  !err ? console.log(`Listening on port ${PORT}`) : console.error(err)
})
// Initialize Web socket Server, define event handlers in servUtils.
var wss = servUtils.createWsServer({server:server})


