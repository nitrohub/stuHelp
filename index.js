//basic page setup => Done
//signup and login feature =>
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const errorHandler = require("./handlers/error.js");
const authRoutes = require("./routes/auth");
const app = express();


app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));

app.use(methodOverride('_method'));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth",authRoutes);
// app.use((req,res,next)=>{
//     let err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// })

app.use(errorHandler);

app.get("/",(req,res,next)=>{
    // res.send("Get!");
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