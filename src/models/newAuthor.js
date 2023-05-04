const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const newAuthor = new mongoose.Schema({
    id: {
        type : Object_Id
    },
    authorName : {
        type :String,
    },
    age: Number,
    address: String,
    rating: Number,
    publisher: String
},
        { timeStamps: true
})
module.exports = mongoose.model('myAuthor',newAuthor);
