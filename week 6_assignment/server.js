const express = require('express');
require('./db/mongoose/mongoose.js');
const hbs = require('hbs');
const app = express();

let User = require('./db/models/User');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('create.hbs');
});

app.get('/read', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

//results after entry
app.post('/results',(req,res)=>{
    var user = new User(req.body)

    user.save().then(function(){
        res.status(200).send(user)
    }).catch(function(e){
        res.status(400).send(e);
    })

    res.render('results',{firstName:req.body.firstName, lastName:req.body.lastName, department:req.body.department, startDate:req.body.startDate, jobTitle:req.body.jobTitle, salary:req.body.salary});
})


app.listen(3000,()=>{
    console.log("Running on Post http://localhost:3000")
});