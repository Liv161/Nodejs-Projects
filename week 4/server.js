const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));

hbs.registerHelper('ptag',(num,words)=>{
    var str = '';
    for(i=0;i<num; i++){
        str+='<p>';
        str+=words;
        str+='</p>';
    }
    return new hbs.handlebars.SafeString(str);
})

function rando(req, res, next){
    req.num = Math.round(Math.random()*25);
    next();
}

app.use(rando);


app.get('/',(req,res)=>{
    res.render('index', {name:"Livio", numbo:req.num});
});


app.get('/animals',(req,res)=>{
    res.render('index', {name:"Animals", numbo:0});
});

app.get('/animals/:type/:color',(req,res)=>{
    res.render('index', {name:req.params.color + " " + req.params.type});
});

// app.use((req, res, next)=>{
//     const error = new Error('Page not found');
//     error.status = 404;
//     next();
// })

// app.use((req, res, next)=>{
// res.status(req.error.status || 500);
//     next();
// })

app.get('/*',(req,res)=>{
    res.render('error');
});

app.listen(3000, () => {
    console.log('Server is running http://localhost:3000');
});
