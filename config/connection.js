const mysql = require("mysql");

require("dotenv").config();
const keys = require("./keys");

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : keys.secret,
    database : 'bbq_db'
});

connection.connect( (err, res) =>{
    if(err) throw err;
    console.log("Connected as connection thread" + connection.threadId);
});

exports = connection;