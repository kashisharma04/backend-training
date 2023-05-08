const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const newPublisher = new mongoose.Schema({
	name: String ,
	category: String ,
	price: {
		type: Number,
		required : true
	},                          
},
{ timeStamps: true
})
module.exports = mongoose.model('productData',newPublisher);
