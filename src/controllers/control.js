const UserModel= require("../models/userModel.js")
const author = require('../models/author.js')

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({"Book Data": savedData})
}
const createAuthorNew = async function (req, res) {
    let data1= req.body
    let saveData= await author.create(data1)
    res.send({"Author Data": saveData})
}
const bookList = async (req,res)=>{
    let collectId = await author.findOne({authorName:"Chetan Bhagat"})
    let allBooks = await UserModel.find()
    let collectBooks = allBooks.filter(x=>x.authorId===collectId.authorId)
    res.send({"required books by CB are:-": collectBooks})
}
// const authorList = async function(req,res){
//     let authorNew = await author.find(x=>x.authorId==author.authorId);
//     res.send({"Author Present ": authorNew.authorName,bookName: author})
// }
const updatePrice = async function(req,res){
    const author1 = await UserModel.findOneAndUpdate(
        {bookName : "Two States"},
        {$set : {price : 100}},
        {new : true}
    )
    res.send({"kashu:- ": author1})
}
const updateAuthorName= async (req,res)=>{
    let updateName = await bookModel.find({price:{$gte:50},price:{$lte:100}}).select({author_id:1})
    let byAuthorName =  await function(){
        for(let i=0;i<updateName.length;i++)
        {
            if(updateName.author_id===bookModel.author_id)
            {
                    let u=  authorModel.author_name
            }       
        }
        return u
}}
// const authorName = await author.find();
// const ans = authorName.find(x=>x.authorId == author.authorId)
// res.send({"Author details ": ans.authorName, book : author})



module.exports.createBook= createBook;
module.exports.bookList= bookList;
module.exports.createAuthorNew = createAuthorNew;
module.exports.updatePrice=updatePrice;
module.exports.updateAuthorName=updateAuthorName;
// module.exports.authorList = authorList;

