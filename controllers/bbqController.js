const express = require("express");
const router = express.Router();
const connection = require("../config/connection");
const bbq = require("../models/bbq");

router.get("/", (req, res) => {
    console.log("you're home!");
    bbq.selectAll(function(data) {
        res.render("index", {list: data});
      });
});

router.get("/data", (req, res) => {
    connection.query("SELECT * FROM bbq", (err, data)=>{
        if(err) throw err;
        res.json(data);    
    });
});

router.put("/", function(req, res) {
    bbq.updateOne(req.body.id, function(data){
        res.send("updated");
    })
}) ;

router.delete("/", function (req, res) {
    bbq.deleteOne(req.body.id, function(data){
        res.send("deleted");
    })
})

router.post("/data/post", (req, res) =>{
    console.log(req.body.location); 

    bbq.insertOne(req.body.location, function(data){
        res.json(data);
    });
});

router.get("*", (req, res) => {
    connection.query("SELECT * FROM bbq", (err, data)=>{
        if(err) throw err;
        console.log("you're home!");
        res.render("index", {list: data});
    })
    
});

module.exports = router;