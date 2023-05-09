const express = require('express');
const router = express.Router();
const newData = require('../models/userData.js')
const controllers= require('../controllers/control.js')
const commonMW = require ("../middlewares/commonMiddlewares.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/basicRoute",  function(req,res){
    res.send("Successfully passed ___!!!!!")
})

router.post('/createUser',controllers.createOrder);
router.post('/loginUser',controllers.loginUser);
router.get('/getUser/:userId',commonMW.checkAuthToken,controllers.getUserData);
router.put('/updateUser/:userId',commonMW.checkAuthToken,controllers.updateUser);
router.delete('/deleteUser/:userId',commonMW.checkAuthToken,controllers.deleteUser);
module.exports = router;

