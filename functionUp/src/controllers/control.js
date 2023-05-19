
// const userData = require("../models/userData.js");
const newData = require("../models/userData.js")
const jwt = require('jsonwebtoken');


const createOrder = async function (req, res) {
  try{
    let data = req.body
    let savedData= await newData.create(data)
    res.status(201).send({ "Personal Data of User": savedData })
  }
  catch(err){
    console.log("this is error",err)
    res.status(404).send({msg:"Error",error:err})
  }
}
const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await newData.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      });
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "technetium",
          organisation: "FunctionUp",
        },
        "functionup-technetium-very-very-secret-key"    //secret-key:- unique
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token });
};
const createBook  = async function(req,res){
  let input = req.body;
  let k = await newData.create(input);
  res.send({msg : k})
}
const getData = async function(req,res){
  let getBook = await newData.find({authorname: "KS", isPublished:true})
  res.send({msg : getBook})
}
const fetchMe = async function(req,res){
  let input = req.body.authorname;
  let match = req.query.authorname;
  let myData = await newData.findOneAndUpdate({authorname :match },{ $set : {authorname : input }} , {new:true , upsert:true})
  res.send({msg : myData})
}

// const practice = async function (req,res){
//   let input = req.query.id;
//   let myData = await newData.find().select({authorname:1})
//   res.send({msg : myData})
// }
const getMe = async function(req,res){
  let getData = req.params.id;
  let data = await newData.find({authorname : "Chetan Bhagat" , isPublished:"true"})
  res.send({"data is here:- ": data})
}
const getAuthor = async function(req,res){
  let data = await newData.findById({authorname: "Kashuu"})
  res.send({"data is here:- ": data})
  //let data = await newData.find().count()     ---->>>>  //COUNT 
  //OR :------>>>>>      //({ $or :[{authorname : "Chetan Bhagat" , isPublished:"true"}]}).
  // SELECT :----->>>>>  //select({bookname:1,_id:0})
  // AND:----->>>>>>>>>  // {authorname : "Chetan Bhagat" , isPublished:"true"}
  // let data = await newData.find().sort({price:-1})   //SORT in desending Order
  //LIMIT Function ------>>>>>>>>>
  // let data = await newData.find().sort({price:1}).limit(3).select({authorname:1})   //LIMIT Function

  //PAGINATION :_----------------->>>>>>
  // let page = req.query.page;
  // let data = await newData.find().skip(2*(page-1)).limit(3)

  // let data = await newData.find().skip(2*(page-1)).limit(3).select({authorname:1, _id:0})   //Pagination Function

  // FIND QUERIES :------->>>>>>>
  // let data = await newData.find({price:{$eq:100})       //Equal to
  // let data = await newData.find({price:{$ne:100}})      //Not equal to
  // let data = await newData.find({price:{$lt:100}})      // LESS THAN
  // let data = await newData.find({price:{$gt:100}})      // Greater THAN
  // let data = await newData.find({price:{$gte:100}})      // Greater THAN equal to
  // let data = await newData.find({price:{$lte:100}})      // LESS THAN equal to

  // let data = await newData.find({ $or :[{price:{$eq:100}}, {price:{$gte : 500}}]}).count()
  
  // $in :------>>>>>>>
  // let data = await newData.find({price :{$in : [100,200,34]}}).count() 
  // $nin :----->>>>>>  
  // let data = await newData.find({price :{$nin : [100,200,400]}}).count()      
  
  // finding price :- price>100  AND  price<300::--->>>>
  //  $and operator
  // let data = await newData.find({ $and: [{price:{ $gt:100 }} ,  {price:{ $lt:300 }}]  }).count()  
  
  // without $and operator:----->>..
  // let data = await newData.find({price:{$gt:100 , $lt:300}}).count()      
   
  // findById :_--------->>>>>>>>
  // let data = await newData.findById("64634bf0bbd55b70c03e0d6c")      
  
  // findOne ():::--->>>>
  // let data = await newData.findOne({price: 300})      
  // let data = await newData.find({price: 300})      
  // console.log(data)

  // Update Data :--->>>   || findOneANdUpdate || updateOne || 
  // update.(
  //   { conditon i.e data which is being updated} ,
  //   { updatechange you want }
  // )

    // REGEX :- Pattern matching
    // let data = await newData.find({authorname : /^pra/  })  
    // STRAT :--->>    
    // let data = await newData.find({authorname : /^pra/i }) 
    // END :--->>>> 
    // let data = await newData.find({authorname : /5$/ })      
    // MIDDLe :--->>>>   
    // let data = await newData.find({bookname : /.*programming/ }) 
     
    // // for findONE()
    // let data = await newData.find({authorname : "kkk"})  // findONE():- give null while fin():- give empty array    
    // if (data){
    //   res.send({msg : data})
    // }
    // else{
    //   res.send({msg : "Please enter data first"})
    // }
    // for find()
    // let data = await newData.find({authorname : "kkk"})  // findONE():- give null while fin():- give empty array    
    // if (data){
    //   res.send({msg : data})
    // }
    // else{
    //   res.send({msg : "Please enter data first"})
    // }
  
  //  res.send({"data is here:- ": data})
}

const updateBook = async function(req,res){
  
  // let data = await newData.updateMany(

  //   {authorname: "Kashuu"},  //condition
  //   { $set : {price: 1000}}   //update this data
  // )
  // input from user:------->
  // let input = req.body
  // let data = await newData.updateMany(
  //   {authorname: "Kashuu"},  //condition
  //   { $set : input}   //update this data
  // )
  // findONEANDUPDATE():--------->>>>>>>>
  // let input = req.body
  // let data = await newData.findOneAndUpdate(
  //   {authorname: "Hariom"},  //condition
  //   { $set : input},   //update this data
  //   // { new: true} ,    //  will return updated document 
  //   // { upsert : true}    //in case of no-match..it will insert the value

  //   //new or upsert ko alg likhne p  :NULL: dega..isliye sath m likhenge
  //   {new :true , upsert:true}
  // )

  
  
  //  AGGREGATION :--->>>>>>>>>>
  let data = await newData.aggregate(
    [
      {$group :{ _id:"$authorname" , updateBook :{$sum:"$price"} }},  //aggregation in [] bracket
      {$sort : {updateBook : -1}}                           //aggregation pipeline
    ]
  )
    res.send({msg : data})
}

const basic = async function(req, res){
  console.log( {msg :"Handler Things !!"})
  res.send({msg : "Middleware executed"})
}
// module.exports.practice=practice;
module.exports.basic=basic;
module.exports.updateBook = updateBook;
module.exports.getAuthor=getAuthor;
module.exports.getMe=getMe;
module.exports.fetchMe=fetchMe;
module.exports.getData=getData;
module.exports.createBook=createBook;

