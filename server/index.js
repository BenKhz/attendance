const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport')
const LocalStategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const dbUtils = require('./db/utils')
const authUtils = require('./db/authUtils')
require('dotenv').config()
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session());
passport.use(new LocalStategy(authUtils.authUser));
passport.serializeUser((user, done) => {
  console.log(`--------> Serialize User`)
  console.log(user)
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  console.log("---------> Deserialize Id")
  console.log(id)
  done (null, {name: "Kyle", id: 123} )
})

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
app.post('/login', passport.authenticate('local', {
  failureMessage: "Fail",
  successMessage: "success"
}))

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
