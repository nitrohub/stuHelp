const express = require('express')
const app = express()
var mongoose = require("mongoose");
var guideobject = require("./data.js");
var guidance = require("./models/guidance.model.js");

//console.log(guideobject.guidances[0].slots);
mongoose.connect('mongodb://localhost:27017/stuHelp'
,{
	useNewUrlParser:true,
	useUnifiedTopology:true,
	useCreateIndex:true
}).catch(error=>console.log(error.reason));

/*
guideobject.guidances.forEach(async function(element){
  try{
  
  
const Guidance=new guidance({
			teacherId: element.teacherId,
      CourseName:element.CourseName,
      teacherName: element.teacherName,
      fees:element.fees,
      slots:element.slots
        

		});

		const newGuidance=await Guidance.save();
	
console.log(newGuidance);
  }
  catch(error){
    console.log(error.message);
  }

});

*/
var bodyParser = require("body-parser");
const { type } = require('os');
/*var Course = require("./models/course.model");*/
console.log("guidance model impoprted properly");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use( express.static( "public" )); 
const port = 3000


app.get('/courses', (req, res) => {
  console.log("to courses");
})
  
app.get('/stuHelp/guidance/:teacher', async (req, res) => {
  
  var currteacher=req.params.teacher;
  console.log(typeof(currteacher));
  try{
  await guidance.findOne({"teacherName":currteacher}, function(err, currteacherguidance){
		if(err){
			console.log(err);
		}
		else{
       console.log("a ");

  console.log(currteacherguidance.teacherName);
    console.log("b");
    
      console.log(currteacherguidance.slots);     
		res.render("guidanceslot", {slots: currteacherguidance.slots});
		}     
  });
  
}
catch(error){    
  console.log(error.message);
}

 
  
})


app.get('/stuHelp/guidance',async (req, res) => {
  try{
  await guidance.find({}, function(err, allguidances){
		if(err){
			console.log(err);
		}
		else{
      console.log(allguidances.length);     
		  res.render("guidances", {allguidances: allguidances});
		}     
  });

}
catch(error){
  console.log(error.message);
}
	
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



