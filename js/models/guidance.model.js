var mongoose = require("mongoose");


var GuidanceSchema = new mongoose.Schema({
    teacherId: String,
    CourseName:String,
    teacherName: String,
    fees:String,
    slots:[{date:String,
        startTime:String,
        endTime:String,
        available:String
    }]

});


module.exports = mongoose.model("guidance", GuidanceSchema);











