const express = require("express")
const router = express.Router();
const { signup,signin } = require("../handlers/auth");

router.get("/signup",(req,res)=>{
    res.render("signup");
})

router.get("/login",(req,res)=>{
    res.render("login");
})

router.post("/signup",signup);


router.post("/signin",signin);

module.exports = router;