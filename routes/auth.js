var express  = require("express");
var router   = express.Router();
var user     = require("../models/user");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;

router.get("/signup",function(req,res){  //go to signup page
    res.render("signup");
});

router.get("/login",function(req,res){   //render login if asked to login
    res.render("login");
});

router.post("/signup",function(req,res){
    var name     = req.body.name;
    var email    = req.body.email;
    var password = req.body.password;

    var newUser = new user({
        name     : name,
        email    : email,
        password : password
    });

    user.createUser(newUser,function(err,user){
        if(err) throw err;
        console.log(user);
    })

    req.flash('success_msg','You are registered!');
    res.redirect("/");
})

passport.use(new localStrategy( //While Login
    function(email, password, done) {
      user.getUserByUsername(email,function(err,user){
        if(err) throw err;
        if(!user){
            return done(null,false,{message:"unknown user"});
        }
        user.comparePassword(password,user.password,function(err,isMatch){
            if(err) throw err;
            if(isMatch){
                return done(null,user);
            }else{
                return done(null,false,{message:'Invalid password'});
            } 
        })
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });


router.post("/signin",passport.authenticate("local",{  //using local strategy because we are using our local database
    successRedirect:"/",
    failureRedirect:"/login",

}),function(req,res){ 
    res.redirect("/");
});


// router.get("/logout",function(req,res){
//     req.logout();
//     res.redirect("/");
// })

module.exports = router;