
const userData = require("../models/userData.js");
const newData = require("../models/userData.js")
const jwt = require('jsonwebtoken');


const createOrder = async function (req, res) {
    let data = req.body
    let savedData= await newData.create(data)
    res.send({ "Personal Data of User": savedData })
}
const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await newData.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
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
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await newData.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};
const updateUser = async function (req, res) {
    let userId = req.params.userId;
    // console.log(userId)
    let user = await newData.findById(userId);
    // console.log(userData)
     if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await newData.findOneAndUpdate({ _id: userId }, userData);
    return res.send({ status: true, data: updatedUser });
};
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  // console.log(userId)
  let user = await newData.findById(userId);
  // console.log(deleteUser)
   if (!user) {
    return res.send("No such user exists");
   }
   let deletedUser = await newData.deleteMany({ _id: userId });
   res.send({ status: true, data: deletedUser });
};
      


module.exports.createOrder=createOrder;
module.exports.loginUser=loginUser;
module.exports.getUserData=getUserData;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
