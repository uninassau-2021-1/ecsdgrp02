const mysql = require('mysql');


//fonte https://www.npmjs.com/package/mysql2
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'avaliacao1',
  password: 'root'
});

module.exports = connection;