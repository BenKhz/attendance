const authUtils = require('../db/authUtils.js')
const dbUtils = require('../db/utils.js')

module.exports = {
  getCampuses: (req, res) => {
    dbUtils.getCampuses((err, campuses) => {
      !err ? res.status(200).send(campuses) : res.send(500, err)
    })
  },
  addCampuses: (req, res) => {
    res.send("added to campuses")
  },
  getCohorts: (req, res) => {
    dbUtils.getCohorts((err, cohorts) => {
      !err ? res.status(200).send(cohorts) : res.send(500, err)
    })
  },
  addCohorts: (req, res) => {
    res.send(`${req.baseUrl} hit! I'm at the login endpoint`)
  },
  signUp: (req, res) => { // Add a new username, salt, and hashed pass if no username exists
    const { email, password } = req.body;
    authUtils.checkUsername(email, (err, result) => {
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
              authUtils.addAccount(options, (err, success) => { err ? res.send(err) : res.set(200).send(success) })
            }
          });
        });
      }
    })
  },
  login: (req,res) => {
    res.send(`${req.baseUrl} hit! I'm at the login endpoint`)
  }
}