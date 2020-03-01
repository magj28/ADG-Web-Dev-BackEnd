const mongoose= require("mongoose");

var CourseSchema= new mongoose.Schema({
	courseName:{
		type:String, 
		requires: "Required"
	},
	courseId: {
		type: String
	},
	courseFee: {
		type: String
	},
	courseDuration: {
		type: String
	}
});

mongoose.model("Course", CourseSchema)