const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const controllers= require('../controllers/control.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", controllers.createBook)
router.get("/bookList",controllers.bookList)
router.get("/getBooksInYear",controllers.getBooksInYear)
router.get("/getParticularBooks",controllers.getParticularBooks)
router.get("/getXINRBooks",controllers.getXINRBooks);

module.exports = router;

