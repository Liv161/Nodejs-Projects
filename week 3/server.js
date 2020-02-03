//---------------------------------------------------------------------------------------------------------------------------------//

var express = require("express");
var path = require("path");
var hbs = require("hbs");
var app = express();

//---------------------------------------------------------------------------------------------------------------------------------//

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

//---------------------------------------------------------------------------------------------------------------------------------//

app.get("/index", function(req,res){
    //console.log(req);
    //res.sendFile(__dirname + "/public/index.html");
    res.render("index.hbs",{style:"<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>",message:"<b>Head over to the about me, to learn more well, <a href='about'>about me</a>.!</b>",loremIpsum:"In aliquam, velit a facilisis bibendum, dolor tellus bibendum elit, eu pellentesque magna mauris vel enim. Nulla mattis ultrices ex vel ultricies. Integer lacinia ullamcorper velit, et laoreet nunc ornare sit amet. Morbi viverra metus sed lacus venenatis placerat. Maecenas porta semper enim ut fringilla. Maecenas sed pharetra nibh. Vivamus rutrum, neque vel malesuada aliquet, nulla nisl consectetur tortor, quis sollicitudin nulla ante vitae lorem. Praesent ornare aliquet metus et eleifend. Donec venenatis, enim ut cursus volutpat, nisl dui posuere ligula, non dapibus turpis ligula vel neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse porttitor viverra neque, id cursus mauris commodo quis. Proin placerat velit et tellus interdum, quis bibendum lacus tincidunt. Quisque faucibus libero ut tellus mollis porta. Nam volutpat quis mi id pulvinar. Phasellus a risus dapibus, pretium justo non, tempor risus."});
});

//---------------------------------------------------------------------------------------------------------------------------------//
app.get("/about", function(req,res){
    res.render("about.hbs",{style:"<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>",picture:"<img src='nyc.jpg' alt='My City'/>",loremIpsum:"<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, sapien non posuere consectetur, dui nulla condimentum quam, at consequat leo nisi ut neque. Vivamus hendrerit rhoncus neque vestibulum egestas. Vestibulum nunc sem, ultrices vel nisi eu, consectetur placerat nibh. In aliquet erat a accumsan auctor. Donec vitae purus pellentesque, scelerisque purus in, tempus est. Maecenas nec mi fringilla, viverra tellus sed, consequat ipsum. Duis laoreet urna ligula, rhoncus cursus nisl gravida quis. Sed est ipsum, pretium non lacinia vitae, vehicula nec ligula. Ut eget imperdiet nibh. Vestibulum nisl est, vehicula at interdum sit amet, condimentum in velit. Nullam commodo eu ligula quis semper.<br><br>Vestibulum ultricies sollicitudin massa, nec vulputate neque mattis id. Phasellus luctus ex a fermentum pellentesque. Phasellus tincidunt, dolor at congue lacinia, nisl nisi sagittis lacus, in cursus elit sapien eget orci. Aliquam a ex id enim venenatis rhoncus a vel neque. Aliquam ullamcorper sapien ac sem ornare, pellentesque consectetur quam dapibus. In hac habitasse platea dictumst. Aenean consequat felis felis, nec congue nisi blandit sit amet. Nullam mollis mollis turpis, at ullamcorper risus aliquet sed. Phasellus scelerisque rutrum fermentum. Nunc ultricies dolor nec egestas feugiat. Etiam dolor turpis, pharetra vitae placerat aliquam, feugiat at eros. Fusce sapien massa, volutpat vestibulum augue id, malesuada maximus massa. Quisque fringilla massa nec arcu laoreet, id placerat odio lobortis. Mauris ligula leo, blandit at placerat id, consectetur et nisl. Curabitur metus nulla, efficitur sed dapibus at, mattis vel risus."});
});

//---------------------------------------------------------------------------------------------------------------------------------//

app.get("/form", function(req,res){
    res.render("form.hbs",{style:"<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>",message:"Please complete this form and press 'submit'"});
});

//---------------------------------------------------------------------------------------------------------------------------------//

//app.all'----------------------------'
//res.render("index.hbs",{junk:req.body.first + " " + req.query.middle});
app.post("/results", function(req,res){
    //console.log(req);
    //res.sendFile(__dirname + "/public/index.html");
    res.render("results.hbs",{style:"<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'><script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script><script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>",information:"Name: "+req.body.Name + " | Email: " + req.body.Email + "<br>" + "Comment: " + req.body.Comment});
});

//---------------------------------------------------------------------------------------------------------------------------------//

app.listen(3000, ()=> console.log("Server running on port 3000"));

//---------------------------------------------------------------------------------------------------------------------------------//

console.log("http://localhost:3000/index");