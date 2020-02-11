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
    res.render('index.hbs');
});


app.post('/results',(req,res)=>{
    var user = new User(req.body)

    user.save().then(function(){
        res.status(200).send(user)
    }).catch(function(e){
        res.status(400).send(e);
    })

    res.render('results',{name:req.body.name, email:req.body.email});
})


app.listen(3000,()=>{
    console.log("Running on Post http://localhost:3000")
});