// const db = require("../models");
// const razorpay = require('razorpay');

// var instance            = new razorpay({
//     key_id              : process.env.RAZOR_ID,
//     key_secret          : process.env.RAZOR_SECRET
// })


// // const Notes = require("../models/notes");
// exports.enterNotes = async function(req,res,next){
//     try{
//         // console.log("Notes = "+Notes);
//         // console.log("Subject = "+req.body);
//         let notes = await db.Notes.create(req.body);
//         console.log("Notes = "+notes +" created!");
//         res.redirect("/");
//     }catch(err){
//         console.log(err);
//         res.redirect("/");
//     }
// }

// exports.allNotes = async function(req,res,next){
//     try{
//         let notes = await db.Notes.find({});
//         console.log("Notes = "+notes.length);
//         res.render("notes",{notes:notes});
//     }catch(err){
//         console.log(err);
//         res.redirect("/");
//     }
// }

// exports.notesDetail = function(req,res,next){
//     res.render("notesDetail",{id:req.params.id});
// }

// exports.buyNotes = function(req,res,next){
//         // res.send("Buy Notes="+req.params.id);
//     var options = {
//         amount: 50000,  // amount in the smallest currency unit
//         currency: "INR",
//         receipt: "order_rcptid_11"
//       };
//       instance.orders.create(options, function(err, order) {
//           if(err){
//               console.log(err);
//           }else{
//             //   console.log("Process = "+process.env.RAZOR_ID);
//               res.render("donateProcess.ejs",{key_id:process.env.RAZOR_ID, order:order});
//           }
//         // console.log(order);
//         // res.send("Done!");
//       });
// }