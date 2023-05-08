const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const newBook = new mongoose.Schema({
    userId: Object_Id,
    productId:Object_Id,
    amount:{
        type: Number
    },
    isFreeAppUser: {
        type : Boolean,
        required : true
    }, 
	date:{
        type : Date,
        required : true
    },
},
        { timeStamps: true
})

module.exports = mongoose.model('orderData',newBook);
