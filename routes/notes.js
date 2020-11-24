const express = require("express")
const router = express.Router();
const {enterNotes,allNotes} = require("../handlers/notes");

router.get("/adminNotes",(req,res)=>{
    res.render("AdminNotes");
})

router.get("/notes",allNotes);
    
router.post("/notes",enterNotes);

module.exports = router;
