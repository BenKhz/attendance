const sql = require('mysql');

module.exports = sql.createConnection({
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || '',
  host: process.env.MYSQL_HOST || 'localhost',
  database: process.env.MYSQL_DB || 'attendance'
});
