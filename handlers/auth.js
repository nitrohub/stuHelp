const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req,res,next){

    try{

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
            return res.status(200).json({
                name,
                email,
                password,
                token
            })
        }else{
            // console.log("Error1");
            return next({
                status : 400,
                message: "Invalid Email/Password"
            })
        }

    }catch(err){
        // console.log(err);
        return next({status: 400, message:err.message});
    }

}

exports.signup =async (req,res,next)=>{
    try{
        let user = await db.User.create(req.body);
        let { name,email,password } = user;
        let token = jwt.sign({
            name,email,password
        },
        process.env.SECRET_KEY
        );
        return res.status(200).json({
            name,email,password,
            token
        })
    }catch(err){
            //if the database validation fails
            if(err.code === 11000){
                err.message = "Sorry, that username or email is already taken"
            }
            return next({
                status :  400,
                message : err.message
            })
    }
}