const mongoose= require("mongoose");
const Object_Id = mongoose.Schema.Types.ObjectId;
const newPublisher = new mongoose.Schema({
    id: {
        type : Object_Id
    },
    name: {
        type: String
    },
    headQuarter : String
},
{ timeStamps: true
})
module.exports = mongoose.model('myPublisher',newPublisher);
