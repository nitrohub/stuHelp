const db = require("../models");
// const Notes = require("../models/notes");
exports.enterNotes = async function(req,res,next){
    try{
        // console.log("Notes = "+Notes);
        // console.log("Subject = "+req.body);
        let notes = await db.Notes.create(req.body);
        console.log("Notes = "+notes +" created!");
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
}

exports.allNotes = async function(req,res,next){
    try{
        let notes = await db.Notes.find({});
        console.log("Notes = "+notes.length);
        res.render("notes",{notes:notes});
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
}