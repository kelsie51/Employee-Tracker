
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '?',
  database : 'db_business'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});


dbConn.query('SELECT * FROM employee', function(err, rows, fields)   
{  
  if (err) throw err;  

  console.log(rows[0]);  

});  

dbConn.end();  

module.exports = dbConn;