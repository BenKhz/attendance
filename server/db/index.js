const sql = require('mysql');

module.exports = sql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'attendance'
});
