const mongoose = require('mongoose')
const author = new mongoose.Schema({
    authorId : {
        type : Number,
        required : true
    },
    authorName : { 
        type : String
    },
    age: Number , 
    address : String 
    // sales: {type: Number, default: 10},
    // isDeleted : Boolean,
},
        { timeStamps: true
})
module.exports = mongoose.model('Author',author)
