const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const newBook = new mongoose.Schema({
    id: {
        type : Object_Id,
        ref : "myAuthor"
    },
    name: String,
    author:{
        type : String
    },
    age: Number,
    ratings:Number,
    publisher:{
        type: Object_Id,
        ref :"myPublisher"
    }
},
        { timeStamps: true
})

module.exports = mongoose.model('myBook',newBook);
