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

router.get("/user-1", function(req,res){
    let marks = req.query.marks
    let result =marks>40?"pass":"fail"
    res.send({data : result})
})
// filter out all numbers that are greater than "input"
let myNum = [2,3,56,6,13,890,432,65,100]
router.post("/user-2", function(req,res){
    let input = req.query.input
    let final1 =[]
    for(let i=0;i<myNum.length;i++){
        if(myNum[i]>input){
            final1.push(myNum[i])
        }
    }
    // let result =input>myNum?"True":"False"
    res.send({data : final1})
})
router.post('/createBook', controllers.createBook);
router.get('/getbook', controllers.getData);
router.put('/fetchMe',controllers.fetchMe);
router.get('/getMe/:id',controllers.getMe);
router.get('/getAuthor',controllers.getAuthor);
router.post('/updateBook',controllers.updateBook);


    // res.send("Hello")
// const mid1 =  function (req,res,next){
//     console.log("welcome to middleware")
//     // logic
//     let loggedIn = false
//     if (loggedIn == true){
//         next ()
//     }
//     else{
//         res.send("Please Login or register")
//     }
// }

// router.get('/basic' , commonMW.mid1, controllers.basic);
// router.get('/practice',controllers.practice);



module.exports = router;

