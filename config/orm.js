const connection = require("./connection");

const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM bbq;", function(err, data){
            if (err) throw err;
            console.log(data);
        });
        console.log("selecting all");
    },
    insertOne: function(){
        console.log("inserting one");
    },
    updateOne: function(){
        console.log("updating one");
    }
}

module.exports = orm;