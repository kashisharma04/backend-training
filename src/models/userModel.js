// Create a bookSchema with bookName, authorName, category and year .
//  Create same 2 api's for books i.e. : 1 api to create a nw 
// book and another api to get the list of all books. 

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    bookName : String,
    authorName : String,
    category: String, 
    year : Number,
},
        { timeStamps: true
})
module.exports = mongoose.model('User',userSchema)



