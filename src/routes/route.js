const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const author = require ('../models/author.js')
const controllers= require('../controllers/control.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", controllers.createBook)
router.get("/myBook",controllers.bookList)
// router.post("/createAuthorNew",controllers.createAuthorNew)
router.get('/problem4',controllers.updateAuthorName);
router.get("/updateBook",controllers.updatePrice);
// router.get("/myAuthor",controllers.authorList);

module.exports = router;

