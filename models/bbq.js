const orm = require("../config/orm.js");

const bbq = {
    selectAll: function(cb) {
        orm.selectAll("bbq", function(res) {
            cb(res);
        });
    },
    insertOne: function(location, cb) {
        orm.insertOne("bbq", location, function(res) {
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne("bbq", id, function(res) {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("bbq", id, function(res) {
            cb(res);
        });
    }
};

module.exports= bbq;