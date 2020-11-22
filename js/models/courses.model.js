var mongoose = require("mongoose");


var courseSchema = new mongoose.Schema({
	courseId: String,
	courseName: String,
	courseDuration: Number,
    isDeleted: Boolean,
    from: Date,
    to:Date,
    fees:String,
    teacherName:String
});


module.exports = mongoose.model("Course", courseSchema);











