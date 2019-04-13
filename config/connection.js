const mysql = require("mysql");

require("dotenv").config();
const keys = require("./keys");
let connection;

if (process.env.JAWSDB_URL) {
    connection.mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : keys.secret,
        database : 'bbq_db',
        typeCast: function castField( field, useDefaultTypeCasting ) {
    
            // We only want to cast bit fields that have a single-bit in them. If the field
            // has more than one bit, then we cannot assume it is supposed to be a Boolean.
            if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
    
                var bytes = field.buffer();
    
                // A Buffer in Node represents a collection of 8-bit unsigned integers.
                // Therefore, our single "bit field" comes back as the bits '0000 0001',
                // which is equivalent to the number 1.
                return( bytes[ 0 ] === 1 );
    
            }
    
            return( useDefaultTypeCasting() );
    
        }
    });
}

connection.connect( (err, res) =>{
    if(err) throw err;
    // console.log("Connected as connection thread" + connection.threadId);
});

module.exports = connection;