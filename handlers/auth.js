const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req,res,next){

    try{
        console.log("Email = "+req.body.email);
        let user = await db.User.findOne({
            email : req.body.email
        });
    
        let {name,email,password} = user;
        let isMatch = await user.comparePassword(req.body.password);
    
        if(isMatch){
            let token = jwt.sign({
                name,
                email,
                password
            },
            process.env.SECRET_KEY
            );
            // return res.status(200).json({
            //     name,
            //     email,
            //     password,
            //     token
            // })
            res.redirect("/");
        }else{
            // console.log("Error1");
            // return next({
            //     status : 400,
            //     message: "Invalid Email/Password"
            // })
            console.log("Invalid Email/Password");
        }

    }catch(err){
        console.log(err);
        // return next({status: 400, message:err.message});
    }

}

exports.signup = async function(req,res,next){
    try{
        let user = await db.User.create(req.body);
        // console.log("User created!");
        let { name,email,password } = user;
        let token = jwt.sign({
            name,email,password
        },
        process.env.SECRET_KEY
        );
        // return res.status(200).json({
        //     name,email,password,
        //     token
        // })
        return res.redirect("/");
    }catch(err){
            console.log("Error"+err);
            //if the database validation fails
            if(err.code === 11000){
                err.message = "Sorry, that username or email is already taken"
                console.log("Error1");
            }
            return next({
                status :  400,
                message : err.message
            })
    }
}