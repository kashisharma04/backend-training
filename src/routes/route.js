const express = require('express');
const router = express.Router();
const newData = require('../models/newBook.js')
const controllers= require('../controllers/control.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createBook", controllers.createBook)
// router.post("/createAuthor",controllers.createAuthorNew)
// router.post('/createPublisher',controllers.createPublisher);
// router.post("/bookId",controllers.bookList);
// router.get("/authorData",controllers.getBookWithAuthor);
router.get("/basicRoute",  function(req,res){
    res.send("Hurray!!!!!")
})

module.exports = router;

