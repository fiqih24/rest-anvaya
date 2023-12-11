const mysql = require('mysql2');

// panggil dotenv config db
require('dotenv').config();
// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
module.exports = db.promise();
