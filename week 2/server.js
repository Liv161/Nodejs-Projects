var express = require("express");
var path = require("path");
var hbs = require("hbs");
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get("/index", function(req,res){
    //console.log(req);
    //res.sendFile(__dirname + "/public/index.html");
    res.render("index.hbs",{junk:"This is my world."});
});

app.get("/form", function(req,res){
    //console.log(req);
    //res.sendFile(__dirname + "/public/index.html");
    res.render("form.hbs",{junk:"This is my world."});
});

//app.all'----------------------------'
//res.render("index.hbs",{junk:req.body.first + " " + req.query.middle});
app.post("/results", function(req,res){
    //console.log(req);
    //res.sendFile(__dirname + "/public/index.html");
    res.render("index.hbs",{junk:req.body.first + " " + req.body.last});
});

app.listen(3000, ()=> console.log("Server running on port 3000"));