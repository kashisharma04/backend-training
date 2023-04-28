const UserModel= require("../models/userModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({"msg": savedData})
}

const bookList= async function (req, res) {
    let BookList= await UserModel.find().select({bookName :1, authorName:1, _id:0});
    res.send({"Book details :- ": BookList})
}
const getBooksInYear= async function(req,res){
    let getBookAsPerYear = await UserModel.find({year:2020})
    res.send({"fetch the book as per year": getBookAsPerYear})
}
const getParticularBooks = async function(req, res){
    let getSpecificBook =await UserModel.findOne().select({bookName : "LOC"})
    res.send({"bring this book ": getSpecificBook})
}

//.select({indianPrice : "100INR"})
const getXINRBooks = async function(req,res){
    let moneyRelated= await UserModel.find({price:{indianPrice :"2000INR"}}) // goto price 
    //let moneyRelated = await UserModel.find(indianPrice"100INR") 
    res.send({"the books with 2000INR cost are ": moneyRelated})
}
const getRandomBooks  = async function(req,res){
    let pagesRelated= await UserModel.find({totalPages:{pages:"500"}}) // goto price 
    res.send({"the books with 500 pages cost are ": pagesRelated})
}


module.exports.createBook= createBook;
module.exports.bookList= bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks= getParticularBooks;
module.exports.getXINRBooks=getXINRBooks;

