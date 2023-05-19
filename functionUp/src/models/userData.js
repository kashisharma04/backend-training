const mongoose= require("mongoose");  
const Object_Id = mongoose.Schema.Types.ObjectId;
const userData = new mongoose.Schema({
    bookname : String,
    authorname: String,
    authorId : Number,
    date:{
        type: Date,
        default: Date.now
    },
    isPublished: {
        type: Boolean,
        default : "true"
    },
    price: Number,
    summary: mongoose.Schema.Types.Mixed,
    isDeleted : Boolean,  // become true on profile deletion
},
        { timeStamps: true
})
let myData = {
    name1 : "kashi",
    marks: 22
}

module.exports = mongoose.model('Book1',userData);
module.exports.myData = myData;

