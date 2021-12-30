const db = require('./index.js');

module.exports = {
  authUser : (user, password, done) => {
    db.query(`SELECT * FROM users WHERE username = "${user}"`, (err, hashedPass) => {
      if(err) { done(err, null) }
      else {
        bcrypt.compare(password, hashedPass[0].hash, (err, success) => {
          if (err) { console.log("Bcyprt Error:::: ", err) }
          done(null, {id: hashedPass[0].id, user: hashedPass[0].user})
        })
      }
    })
  }
}