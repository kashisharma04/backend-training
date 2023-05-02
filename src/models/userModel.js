const mongoose = require('mongoose')
const author = require('./author.js')
const myData = author;
const userModel = new mongoose.Schema({
    bookName : { 
        type:String
         },
    authorId : {
        type : Number,
        required : true
    },
    price : {
        type : Number
    },
    ratings : Number,
    // sales: {type: Number, default: 10},
    // isDeleted : Boolean,
},
        { timeStamps: true
})
module.exports = mongoose.model('Book',userModel)



