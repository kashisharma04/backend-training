// const updateUser= async function (req, res) {

//     const {emailId, mobile} = req.body

//     //findOneAndUpdate({mobile:"9102777777"},{emailId:"sachin@gmail.com"})
//     let allUsers= await UserModel.findOneAndUpdate(
//         {mobile: mobile}, // find query/document
//         {emailId: emailId}, //update query/document
//         {new: true} // it will return updated document
//         )
//     res.send({msg: allUsers})
// }