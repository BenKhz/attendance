const db = require('./index.js');

module.exports = {
  getCohorts: (cb) => {
    return db.query(`SELECT * FROM cohorts`, (err, rows) => {
      err ? cb(err) : cb(null, rows)
    })
  },
  getCampuses: (cb) => {
    return db.query(`SELECT * FROM campuses`, (err, rows) => {
      err ? cb(err) : cb(null, rows)
    })
  },
  getEnrollment: (cb, options) => {
    let baseQuery = `SELECT * FROM enrollment `;
    if (options) {
      let { campus, cohort } = options;
      baseQuery += `WHERE id_campuses=${campus} AND id_cohorts=${cohort}`
    }
    return db.query(baseQuery, (err, rows) => {
      err ? cb(err) : cb(null, rows);
    })
  },
  addEnrollment: (payload, cb) => { // TODO: Insert new enrollment entries based on name.
    const {campus_id, cohort_id, first_name, last_name} = payload;
    let baseQuery = `INSERT INTO enrollment (first_name, last_name, id_campuses, id_cohorts) VALUES ('${first_name}', '${last_name}', ${campus_id}, ${cohort_id})`;
    db.query(baseQuery, (err, rows) => {
      err ? cb(err) : cb(null, rows)
    })
  },
  deleteEnrollment: (name, cb) => { //TODO: Used to delete single enrollment entries based on name.
    console.log('Should use DELETE FROM table WHERE (Conditions)')
  },
  // @ param payload : Key Value object containing current attendance in client state.
  // @ param cb : function from server response to handle errors
  // @ returns : Array or row results from mySQL transaction
  addStudentTimes: (payload, cb) => { // Working bulk insert. Needs Duplicate handling OR Once per day limit
    var sql = `INSERT INTO attendance (date, first_name, last_name, minutes_past) VALUES ?`
    var values = [];
    for (var entry of payload) {
      values.push([entry.date, entry.first_name, entry.last_name, entry.time])
    }
    db.query(sql, [values], (err, result) => {
      err ? cb(err) : cb(null, result)
    })
  },
  updateStudentTimes: (cb) => {
    var today = new Date().toDateString();
    db.query(`DELETE FROM attendance WHERE date = "${today}"`, (err, result) => {
      err ? cb(err) : cb(null, result)
    })
  },
  getTodaysAttendance: (payload, cb) => { // Should get
    return db.query(`SELECT * FROM attendance WHERE date = "${payload}"`, (err, rows) => {
      err ? cb(err) : cb(null, rows);
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