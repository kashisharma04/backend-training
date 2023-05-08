// const UserModel= require("../models/newBook.js")
// const author = require('../models/author.js')
const newData = require("../models/newBook.js")
const newData1 = require("../models/newAuthor.js")
const newData2 = require("../models/newPublisher.js")
const newBook = require("../models/newBook.js")
const newAuthor = require("../models/newAuthor.js")
const newPublisher = require("../models/newPublisher.js")
// const newPublisher = require("../models/newPublisher.js")
const createOrder = async function (req, res) {
    let data = req.body
    let savedData= await newData.create(data)
    res.send({ "Order by User": savedData })
}
const createOrder1= async function(req,res){
    const data= req.body
    let isFreeAppUser = req.header('isFreeAppUser')
    console.log(isFreeAppUser)
    const uid=req.body.userId
    const pid=req.body.productId
    const alluser=await newAuthor.find()
    const allproduct= await newPublisher.find()
    let order=null
    for(let i of alluser){
       for(let j of allproduct){
        
        if(uid==i._id&&pid==j._id){
            // console.log(isFreeAppUser=='false' , i.balance>=data.amount)
            if(isFreeAppUser=='false' &&i.balance>=data.amount){
            order= await newBook.create(data)
            user=await newAuthor.updateMany({_id:uid},{$inc:{balance:-data.amount}},{$new:true})
           return  res.send(order)
            }
            else if(isFreeAppUser=='false'&&i.balance<data.amount){
                return res.send("you don't have enough balance")
            }
            else{
            order= await newBook.create(data)

            product=await newBook.updateMany({userId:uid},{$set:{amount:0}},{$new:true})
            console.log("block2")
            return res.send(order)
            }
           }
       }
    }
    res.send("First register to place order")
}
const getOrder1=async function(req,res){
    const data= await newBook.find()
    res.send(data)
}
module.exports.createOrder1=createOrder1; 
module.exports.getOrder1=getOrder1;
// ====================================================
const createUser = async function (req, res) {
    let data1 = req.body
    let saveData = await newData1.create(data1)
    // // let tokenData = req.headers.token
    // console.log("Request headers before :- ",req.headers)
    // // console.log(req.headers.batch)
    // console.log(req.headers["content-type"])
    // // console.log(tokenData)
    // req.headers.isFreeAppUser=false;
    // console.log("Request headers after :- ",req.headers)

    res.send({ "User Data": saveData })
}
const createProduct = async function (req, res) {
    let data1 = req.body
    let saveData = await newData2.create(data1)
    res.send({ "Product Details": saveData })
}

const middlewareTwo = async function (req, res, next) {
    let isFreeAppUser = req.header('isFreeAppUser');
    // req.headers['isFreeAppUser']=false;
    if (isFreeAppUser==undefined) {
        res.send({ error: `Missing mandatory header: isFreeAppUser` });
    }
    const user =  newData.find().select({userId:1});
    if (!user) {
        res.send({ error: 'Invalid user' });
    }
    const product =  newData.find().select({productId:1});
    if (!product) {
        res.send({ error: 'Invalid product' });
    }
    // res.send({successfull: "Everything is Fine!!"})
    next()
}

// const orderList = async (req, res) => {
//     // let collectId = await newData.find().populate('userId').populate('productId')
//     // let original = await collectId.find().select({userId : 1, productId:1})
//     res.send({ collect: collectId })
// }
// const getBookWithAuthor = async function (req, res) {
//     let specificBook = await newData.find().populate("authorDetails")
//     res.send({ collect: specificBook })
// }
// const hardCover= async function (req, res) {
//     let pname=await newPublisher.find({name:{$in:['Arihant Publications','Delhi']}}).select({id:1})
//     let aname=await newAuthor.find({rating:{$gt:3.5}}).select({id:1})
//     let books=null;
//     // for(i of pname){
//     //     books = await newBook.updateMany({publisher_id:i._id},{$set:{isHardCover:'true'}},{new:true})
//     // }

//     // // let updateprice=await bookModel.find({author_id:aname._id}).select({price:1,_id:0})
//     // let updateprice=null;
//     // for(i of aname){
//     //  updateprice=await newBook.updateMany({authorDetails:i.id},{$inc:{price:10}},{new:true})
//     // } 
//     res.send({data: books,updateprice})
// }

// module.exports.middlewareTwo = middlewareTwo;
// module.exports.createOrder = createOrder/
// module.exports.orderList = orderList;/
module.exports.createUser = createUser;
module.exports.createProduct = createProduct;

