const UserModel= require("../models/userModel.js")
const author = require('../models/author.js')
const newData= require("../models/newBook.js")
const newData1 = require("../models/newAuthor.js")
const newData2 = require("../models/newPublisher.js")
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await newData.create(data)
    res.send({"Book Data": savedData})
}
const createAuthorNew = async function (req, res) {
    let data1= req.body
    let saveData= await newData1.create(data1)
    res.send({"Author Data": saveData})
}

const bookList = async (req,res)=>{
    let collectId = await newData1.find().populate('myAuthor').populate('myPublisher')
    res.send({ collect : collectId})
}
const getBookWithAuthor = async function(req,res){
    let specificBook = await newData.find().populate("id")
    res.send({collect : specificBook})
}

module.exports.createBook= createBook;
module.exports.bookList= bookList;
// module.exports.createPublisher=createP
module.exports.createAuthorNew = createAuthorNew;
module.exports.getBookWithAuthor=getBookWithAuthor;

// module.exports.updatePrice=updatePrice;
// module.exports.updateAuthorName=updateAuthorName;
// module.exports.authorList = authorList;

