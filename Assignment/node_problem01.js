const express = require('express')
const router = express.Router();
const app = express();
// app.use('/', route);
app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    const arr= [1,2,3,4,5,7,8,9]
    let n = arr.length + 1;
    let sumofNumber = (n* (n+1))/2;
    let sumofArray = arr.reduce((value, num )=> value+num , 0);
    let missingNumber = sumofNumber - sumofArray
    ///LOGIC WILL GO HERE
    // console.log(missingNumber) 
    res.send({data:missingNumber});
});
// const 
app.get("/sol2", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    const arr= [33,34,35,37,38,39]
    let b = arr[arr.length-1]
    let a = arr[0]
    let n = (b - a)+1
    let sumofNumber = (n/2)*(a+b);
    let sumofArray = arr.reduce((value, num )=> value+num);
    let missingNumber = sumofNumber - sumofArray
    ///LOGIC WILL GO HERE 
    // console.log(sumofNumber)
    res.send({data:missingNumber} );
});




app.listen(process.env.PORT || 4500, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4500))
});