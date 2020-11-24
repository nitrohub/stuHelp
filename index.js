//Only admins can enter the notes
//basic page setup => Done
//signup and login feature => Done
//Enter the notes details from the admin side => Done
//Show case Notes on the Client side => Done
//Filter notes based on the subject name and the class
//Pay for the notes and make the google drive link accessible to the user
//Make an entry in the users purchased notes Array=>[]
//Make an entry in the purchased item array

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const errorHandler = require("./handlers/error.js");
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");
const app = express();


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.use(methodOverride('_method'));
app.use(cors());


app.use(errorHandler);
app.use(authRoutes);
app.use(notesRoutes);

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