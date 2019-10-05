const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) return console.log(err);
  console.log('connected to badmovies mySQL db...');
});

module.exports = connection;
