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
  },
  checkUsername: (user, cb) => {
    db.query(`SELECT * from users WHERE username = "${user}"`, (err, result) => {
      err ? cb(err) : cb(null, result)
    })
  },
  addAccount: (options, cb) => {
    const {username, salt, hash} = options;
    db.query(`INSERT INTO users (username, salt, hash) VALUES("${username}", "${salt}", "${hash}")`, (err, result) => { err ? cb(err):cb(null,result)})
  },
  getHashedPass: (user, cb) => {
    return db.query(`SELECT salt, hash FROM users WHERE username = "${user}"`, (err, hashedPass) => {
      err ? cb(err) : cb(null, hashedPass)
    })
  }
}