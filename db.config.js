
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '6Lbgummy?',
  database : 'db_employee_tracker'
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

dbConn.query('SELECT * FROM role', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows[0]);  

});  

dbConn.query('SELECT * FROM department', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows[0]);  

});  

dbConn.end();  

module.exports = dbConn;