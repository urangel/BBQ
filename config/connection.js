const mysql = require("mysql");

require("dotenv").config();
const keys = require("./keys");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : keys.secret,
        database : 'bbq_db',
    });
}

connection.connect( (err, res) =>{
    if(err) throw err;
    // console.log("Connected as connection thread" + connection.threadId);
});

module.exports = connection;