const express = require('express');
const lodash = require('lodash')
const greet = require('../logger/logger.js')
const info = require('../util/helper.js')
const info1 = require('../validator/formatter')

const router = express.Router();
router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
//     // problem 1
//     greet.welcome()
//     // problem 2
//     info.printDate()
//     info.printMonth()
//     info.getBatchInfo()
//     // problem 3
//     info1.rmsp()
//     info1.lower()
//     info1.upper()
//     // problem 4
//     let monthName=['January','February','March','April','May','June','July','August','September',
//                     'October', 'November','December']
//    console.log( lodash.chunk(monthName,[size=4]))
    // let myArr= [1,3,5,7,9,11,13,15,17,19]
    // for (let i=0;i<)
    // console.log( lodash.tail(myArr))
    // let arr =[2,3,4,2,3,2]
    // let arr1 = [2,3,4,2,3]
    // let arr2 =[4,3,2,1,2,2,3]
    // let arr3 =[2,3,4,4,4,4,5]
    // let arr4 = [2,3,8,8,8,8,2]
    // console.log(lodash.union(arr,arr1,arr2,arr3,arr4))

    console.log(lodash.fromPairs(["horror","The Shining"],["drama","Titanic"],["thriller”,”Shutter Island"],["fantasy”,”Pans Labyrinth"]))
});
// router.get('/test-me',)

module.exports = router;