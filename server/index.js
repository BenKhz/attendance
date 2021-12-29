const path = require('path');
const express = require('express');
const bcrypt = require('bcrypt');
const dbUtils = require('./db/utils')
const servUtils = require('./utils');
const db = require('./db');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
// app.use(servUtils.log);
app.use(express.static('dist'));

app.post('/signup', (req, res) => { // Add a new username, salt, and hashed pass if no username exists
  const { email, password } = req.body;
  dbUtils.checkUsername(email, (err, result) => {
    if (err) {
      res.set(301).send(err)
    } else if (result.length) {
      res.status(401).send("Username Taken")
    } else {
      bcrypt.genSalt(3, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) { res.set(403).send(err) }
          else {
            const options = { username: email, salt, hash }
            dbUtils.addAccount(options, (err, success) => { err ? res.send(err) : res.set(200).send(success) })
          }
        });
      });
    }
  })
})
app.post('/login', (req, res) => { //
  const {email, password} = req.body;
  console.log("USER ", email)
  dbUtils.getHashedPass(email, (err, hashedPass) => {
    if (err) { res.status(500).send(err) }
    else{
      bcrypt.compare(password, hashedPass[0].hash, (err, success) => {
        if (err) { res.status(500).send(err) }
        res.status(success ? 200:401).send()
      })
    }
  })
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
app.listen(PORT, (err) => {
  !err ? console.log(`Listening on port ${PORT}`) : console.error(err)
})
