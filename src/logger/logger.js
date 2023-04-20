const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    res.send('Welcome to my application. I am Kashi and a part of FunctionUp Californium cohort.!')
});

module.exports = router;
