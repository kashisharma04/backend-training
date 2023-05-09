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

module.exports.checkData=checkData;
module.exports.checkAuthToken = checkAuthToken;