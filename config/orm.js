const connection = require("./connection");

const orm = {
    selectAll: function(table, cb){
        connection.query(`SELECT * FROM ${table};`, function(err, data){
            if (err) throw err;
            console.log(data);
            cb(data);
        });
        console.log("selecting all");
    },
    insertOne: function(table, location, cb){
        connection.query(`INSERT INTO ${table}(location) VALUES (?);`, location, (err, data) =>{
            if(err) throw err;
            console.log("values inserted");
            console.log(data);
            cb(data);
        });
    },
    updateOne: function(table, id, cb){
        console.log("updating one");
        connection.query(`UPDATE ${table} SET smoked = 1 WHERE id = ?;`, id, (err, data) => {
            if(err) throw err;
            console.log("smoked to 1 in sql");
            cb(data);
        })
    },
    deleteOne: function(table, id, cb){
        connection.query(`DELETE FROM ${table} WHERE id = ?;`, id, (err, data)=>{
            if(err) throw err;
            console.log("deleted from sql");
            cb(data);
        });
    }
}

module.exports = orm;