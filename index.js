//basic page setup => Done
//signup and login feature =>

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride('_method'));


app.get("/",(req,res)=>{
    res.render("index");
});


var port = process.env.PORT || 9000

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server Started!");
    }
})