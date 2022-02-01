const express = require('express');
const app = express();
const session = require('express-session');
const servUtils = require('./utils.js')
// const bcrypt = require('bcrypt');
// const dbUtils = require('./db/utils')
const Auth = require('./routes/auth.js')
const Campuses = require('./routes/campuses.js')
const Cohorts = require('./routes/cohorts.js')
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

// placeholder route for dummy data
app.get('/enroll', (req, res) => {
  var enroll = require('./lib/hrlax4849')
  res.status(200).send(enroll)
})

// Uncomment when routes are finished.
app.use('/cohorts', Cohorts);
app.use('/campuses', Campuses);
app.use('/auth', Auth);
// app.use('/attendace', Attendance);
// app.use('./webhooks', Webhooks);

app.post('/webhook', (req, res) => {
  var {participant} = req.body.payload.object;
  wss.emit('hook', wss.clients, participant)
  res.status(200).send("Posted to /webhook!")
})

// Initialize server
const server = app.listen(PORT, (err) => {
  !err ? console.log(`Listening on port ${PORT}`) : console.error(err)
})
// Initialize Web socket Server, define event handlers in servUtils.
var wss = servUtils.createWsServer({server:server})


