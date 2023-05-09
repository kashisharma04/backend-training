const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const userData = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {
        type : Boolean,
        default: false     //default value is false
    },  
    age: Number,
},
        { timeStamps: true
})

module.exports = mongoose.model('User',userData);
