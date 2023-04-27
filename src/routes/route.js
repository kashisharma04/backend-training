const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserModel= require('../controllers/control.js')

router.get('test01',function (req,res){
    res.send("First API!!")
}) 
router.post('/createUser', async function(req,res){
    let data = req.body
    let saveData = await UserModel.create(data)
    res.send({ msg : saveData})
})
module.exports = router;


