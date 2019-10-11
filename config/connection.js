// Set up MySQL connection.
var mysql = require("mysql");


var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL); 
}else{ 
  connection = mysql.createConnection({
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vntumxcxgltodbg2",
  password: "B@fromer9eovqslzsq",
  database: "s5d5i87vpj0wyc7n"
});
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
