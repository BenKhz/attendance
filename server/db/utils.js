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
  addEnrollment: (name, cb) => { // TODO: Insert new enrollment entries based on name.
    console.log('Insert date, minutes_past, first_name, last_name, INTO attendance IF NOT EXISTSShould use INSERT INTO ENROLLMENT to add a student to enrollment use IF NOT EXISTS')
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
}