const express = require('express');
const router = express.Router();
const newData = require('../models/newBook.js')
const controllers= require('../controllers/control.js')
const commonMW = require ("../middlewares/commonMiddlewares.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// router.get('/allbook', controllers.allbook)
// router.post("/createOrder",controllers.createOrder)
router.post("/createOrder1",commonMW.validHeaders, controllers.createOrder1)
// router.get('/getOrder1',controllers.getOrder1);

router.post("/createUser",controllers.createUser)
router.post('/createProduct',controllers.createProduct);
// router.get('/appFree',controllers.middlewareTwo);// controllers.createOrder);
// router.get('/orderList',controllers.orderList);

router.get("/basicRoute",  function(req,res){
    res.send("Successfully passed ___!!!!!")
})

module.exports = router;

