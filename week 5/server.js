//*************************************************** */
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));
//**************************************************** */

//HELPER
 hbs.registerHelper('choice',(num,code)=>{
     var str = '';   
     for(i=0;i<num; i++){
        var color = ((1<<24)*Math.random()|0).toString(16);
        var color1 = ((1<<24)*Math.random()|0).toString(16);
        var color2 = ((1<<24)*Math.random()|0).toString(16);
        //console.log(color);
        code = color;
        code1 = color1;
        code2 = color2;
         str+='<table style="width:30%;height:30%"><tbody><tr> <td style="background-color: #'+code+';">'+code+'<br/><span style="color:#ffffff">'+code.toUpperCase()+'</span></td> <td style="background-color: #'+code1+';">'+code1+'<br/><span style="color:#ffffff">'+code1.toUpperCase()+'</span></td> <td style="background-color: #'+code2+';">'+code2+'<br/><span style="color:#ffffff">'+code2.toUpperCase()+'</span></td></tr></tbody></table>';
         //console.log(color);
     }
     return new hbs.handlebars.SafeString(str);
 })

 hbs.registerHelper('error404',(num,code)=>{
    var str = '';   
    for(i=0;i<num; i++){
        str+='<div class="still">';
        str+= code;
        str+='</div>';
        str+='<div class="rotate">';
        str+= code;
        str+='</div>';
        str+='<div class="shrink">';
        str+= code;
        str+='</div>';
    }
    return new hbs.handlebars.SafeString(str);
})

 app.post("/results", function(req,res){
    res.render("index",{name:"Livio's",number:req.body.numb});
});

//**************************************************** */

app.get('/',(req,res)=>{
    //res.render('index', {name:"Livio", numbo:req.num});
    res.render('index',{name:"Livio's"});
});

//****************************************************** */

function rando(req, res, next){
    req.num = Math.round(Math.random()*(50 - 20 + 1)) + 20;
    next();
}

app.use(rando);


app.get('/*',(req,res)=>{
    res.render('error',{numbo:req.num});
});
//****************************************************** */
app.listen(3000, ()=> {
    console.log('Server is running http://localhost:3000');
});
