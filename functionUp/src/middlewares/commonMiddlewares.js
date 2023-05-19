const userData = require("../models/userData");
const jwt = require('jsonwebtoken');


// Middleware to check x-auth-token header
const checkAuthToken = (req, res, next) => {
  const authToken = req.headers['x-auth-token'];

  if (!authToken) {
    return res.send({ error: 'x-auth-token header is missing.' });
  }

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(authToken, 'functionup-technetium-very-very-secret-key');
    // Attach the decoded token to the request object for further use
    req.user = decodedToken;

    next();
  } catch (error) {
    return res.send({ error: 'Invalid token.' });
  }
};

// GET /getUser/:userId
const checkData= async function (req, res,next) {
  const userId = req.userId;
  const user = await userData.find((user) => user._id === userId);

  if (!user) {
    return res.send({ error: 'User not found.' });
  }
  // return res.send({ user });
  next()
};
const middleware2= async  function(req,res,next){
  let token = req.headers["x-auth-token"];
  let decodedToken=jwt.verify(token, "technetium-batch")
  let userToBeModified = req.params.userId
    let userLoggedIn =decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    next()

}
const mid1 =  function (req,res,next){
  console.log("welcome to middleware")
  // logic
  let loggedIn = false
  if (loggedIn == true){
      next ()
  }
  else{
      res.send("Please Login or register")
  }
}
module.exports.mid=mid1;
module.exports.checkData=checkData;
module.exports.checkAuthToken = checkAuthToken;
module.exports.middleware2=middleware2;