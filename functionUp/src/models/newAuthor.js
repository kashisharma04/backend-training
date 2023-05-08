const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const newAuthor = new mongoose.Schema({
    name : String,
	balance: {
        type: Number,
        default : 100
     }, // Default balance at user registration is 100
	address:  String,
	age: Number ,
 	gender: {
        type : [String],
        enum : ["male", "female", "other"]
    },
	isFreeAppUser:{
        type : Boolean,
        default : false        // Default false value     
    },                  
},
        { timeStamps: true
})
module.exports = mongoose.model('userData',newAuthor);
