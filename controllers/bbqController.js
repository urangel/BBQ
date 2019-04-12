const express = require("express");
const router = express.Router();
const connection = require("../config/connection");

// router.use(function timeLog (req, res, next){
//     console.log("Time :" + Date.now());
//     next();
// });

router.get("/", (req, res) => {
    console.log("you're home!");
    connection.query("SELECT * FROM bbq", (err, data)=>{
        if(err) throw err;
        res.render("index", {list: data});
    });
});

router.get("/data", (req, res) => {
    connection.query("SELECT * FROM bbq", (err, data)=>{
        if(err) throw err;
        res.json(data);    
    });
});

router.put("/data/:id", (req, res) => {
    connection.query("UPDATE bbq SET smoked = 1 WHERE id = ?;", [req.params.id], (err, data) => {
        if(err) throw err;
        console.log("smoked to 1 in sql");
    })
    res.redirect("/");
}) ;

router.post("/data/post", (req, res) =>{
    console.log(req.body.location); 
    connection.query("INSERT INTO bbq(location) VALUES (?);", [req.body.location], (err, data) =>{
        if(err) throw err;
        console.log("values inserted");
        console.log(data);
        res.redirect("/");
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