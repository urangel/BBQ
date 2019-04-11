const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view-engine", "handlebars");

app.listen(PORT, () =>{
    console.log("Listening on port: " + PORT);
})