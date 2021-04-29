require("dotenv").config();
const cookieParser = require("cookie-parser");
const flash        = require("flash");
const express = require("express");
var session   = require("express-session");
var passport = require("passport");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");
// const notesRoutes = require("./routes/notes");
const app = express();

// const user = require("./models/user");
// const localStrategy = require("passport-local").Strategy;
const authRoutes = require("./routes/auth");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/public"));

app.use(methodOverride('_method'));
app.use(cors());
app.use(cookieParser());

app.use(session({
    secret: "secret",
    saveUninitialized : true,
    resave : true 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());

app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})

app.use(authRoutes);

// passport.use("user",new localStrategy(
//     function(name,password,done){
//         console.log("Name = "+name);
//         console.log("Password = "+password);
//         user.getUserByUsername(name,function(err,User){
//             if(err) console.log(err);
//             if(!User){
//                 return done(null, false,{message: 'Unknown user'})
//             }

//             user.comparePassword(password,User.password,function(err,isMatch){
//                 console.log("Inside Compare Password!");
//                 if(err) console.log(err);
//                 if(isMatch){
//                     return done(null, User);
//                 }else{
//                     return done(null,false,{message:'Invalid Password'});
//                 }
//             })
//         })
//     }
// ))

// passport.serializeUser(function(user,done){
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done){
//     user.getUserById(id,function(err,user){
//         done(err,user);
//     });
// });

// app.use(notesRoutes);

app.get("/",(req,res,next)=>{
    // res.send("Get!");
    res.render("index");
});


var port = process.env.PORT || 1325

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server Started!");
    }
})