const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const ws = require('ws')

const dbUtils = require('./db/utils');
const { AirlineSeatReclineExtraTwoTone } = require('@mui/icons-material');
require('dotenv').config()
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))

app.use(express.static('dist'));

app.post('/webhook', (req, res) => {
  var {user_name, date_time, email} = req.body.payload.object.participant;
  var attendee = {user_name, date_time, email}
  console.log("Webhook recieved!")
  wss.emit('hook', wss.clients, attendee)
  res.status(200).send("Posted to /webhook!")
})


// Begin DB interation routes
app.get('/cohorts', (req, res) => {
  dbUtils.getCohorts((err, result) => { err ? res.send(err) : res.send(result) })
})

app.get('/campuses', (req, res) => {
  dbUtils.getCampuses((err, result) => { err ? res.send(err) : res.send(result) })
})

app.get('/enroll', (req, res) => { // SELECT * from enrollment table.

  dbUtils.getEnrollment((err, result) => {
    err ? console.log(err) : res.send(result.map(entry => {
      entry.date = null;
      entry.time = null;
      return entry
    }));
  }, req.query)
})

app.post('/enroll', (req, res) => { // Should add record to enrollment table
  dbUtils.addEnrollment(req.body, (err, result) => { err ? res.send(err) : res.send(result) })
})

app.get('/attend', (req, res) => { // Should Select all attendance from todays date.
  dbUtils.getTodaysAttendance(req.body, (err, result) => {
    err ? console.log(err) : res.send(result.message);
  })
})

app.post('/attend', (req, res) => { // Working INSERT into attendance table
  dbUtils.addStudentTimes(req.body, (err, result) => {
    err ? console.log(err) : res.send(result.message);
  })
})

app.patch('/attend', (req, res) => { // Perform a delete off of todays date, and then INSERT new records into attendance table
  dbUtils.updateStudentTimes((err, result) => {
    if (!err) {
      dbUtils.addStudentTimes(req.body, (err, result) => {
        err ? console.log(err) : res.send(result.message);
      })
    } else {
      console.log(err)
      res.set(500).send(err)
    }
  })
})


// Initialize server
var server = app.listen(PORT, (err) => {
  !err ? console.log(`Listening on port ${PORT}`) : console.error(err)
})

var wss = new ws.Server({server: server})
wss.on('hook', (sockets, req) => {
  sockets.forEach(socket => {
    socket.send(JSON.stringify(req))
  })
})
wss.on('connection', (ws) => {
  console.log("Connection event!")
})
wss.on('message', (socket, req) => {
  socket.send("recieved")
})

