const express = require('express');
const router = express.Router();
let name1="Kashi"

router.get('/test', function (req, res) {
    res.send("Welcome to my application. I am "+name1 +" and a part of FunctionUp Californium cohort.!")
});

module.exports = router;
