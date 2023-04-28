// Create a bookSchema with bookName, authorName, category and year .
//  Create same 2 api's for books i.e. : 1 api to create a nw 
// book and another api to get the list of all books. 

const mongoose = require('mongoose')
const userModel = new mongoose.Schema({
    bookName : { 
        type:String
         },
    price : {
        indianPrice: String
    },
    year: {
        type : Number,
        default : 2021
    },
    authorName : String,
    tag: [String], 
    totalPages : Number,
    stockAvailable :Boolean
},
        { timeStamps: true
})
module.exports = mongoose.model('User',userModel)



