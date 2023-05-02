const mongoose= require("mongoose");
const newBook = new mongoose.Schema({
    name1: String,
    author:{
        type : Schema.Types.ObjectID,
        ref:"newAuthor"
    },
    price: 50,
    ratings:4.5,
    publisher:"k"
},
        { timeStamps: true
})
const newAuthor = new mongoose.Schema({
    authorName : String,
    age: Number,
    address: String,
    rating: Number
},
        { timeStamps: true
})
const newPublisher = new mongoose.Schema({
    name: String,
    headQuarter : String,
})
