const express = require('express');
const lodash = require('lodash')
const greet = require('../logger/logger.js')
const info = require('../util/helper.js')
const info1 = require('../validator/formatter')
const movie =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
// let i = ++i
const films=[ {
    id: 1,
    name1: "The Shining"
   },
    {
    id: 2,
    name1: "Incendies"
   },
    {
    id: 3,
    name1: "Rang de Basanti"
   },
    {
    id: 4,
    name1: "Finding Nemo"
   }]
   

const router = express.Router();
router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
    // problem 1
    // greet.welcome()
//     // problem 2
//     info.printDate()
//     info.printMonth()
//     info.getBatchInfo()
//     // problem 3
//     info1.rmsp()
//     info1.lower()
//     info1.upper()
//     // problem 4
    let monthName=['January','February','March','April','May','June','July','August','September',
                    'October', 'November','December']
   console.log( lodash.chunk(monthName,[4]))
    // let myArr= [1,3,5,7,9,11,13,15,17,19]
    
    // console.log( lodash.tail(myArr))
    // let arr =[2,3,4,3,2]
    // let arr1 = [2,3,4,2,3]
    // let arr2 =[4,3,2,1,2,2,3]
    // let arr3 =[2,3,4,4,4,4,5]
    // let arr4 = [2,3,8,8,8,8,2]
    // console.log(lodash.union(arr,arr1,arr2,arr3,arr4))

    // console.log(lodash.fromPairs(["horror","The Shining"],["drama","Titanic"],["thriller”,”Shutter Island"],["fantasy”,”Pans Labyrinth"]))
});
// router.get('/test-me',)
router.get('test-you',function(req,res){
    console.log("Hello Kashi")
})
router.get ('/students',function (req,res){
    res.send(['sabiha','neha','akash'])
})
router.get('/student/:studentName',function(req,res){
    console.log(req,params.studentName)
    res.send('student data')
})
router.get('/movies',function(req,res){
    console.log(movie)
})
router.get('/movies/:indexNumber',function(req,res){
    const indexNumber =req.params.indexNumber
    const movie1 = movie[indexNumber]
    // if(movie.length-1 < indexNumber || indexNumber < 0){
    //     res.send("Error..Invalid Input")    }
    // else{
    //     res.send("valid")
    // }
    res.send(movie1)
})
// router.get('/movies/:indexNumber',function(req,res){
//     const indexNumber =req.params.indexNumber
//     const movie1 = movie[indexNumber]
//     if(movie.length-1 < indexNumber || indexNumber < 0){
//         res.send("Error..Invalid Input")    }
//     else{
//         res.send("valid")
//     }
//     res.send(movie1)
// })
router.get('/films',function(req,res){
    res.send(films)
})
router.get('/films/:filmId',function(req,res){
    // const filmId =req.params.filmId
    // const film = Object.keys(films)
    let id = req.params.filmId;
    for(let i=0;i<films.length;i++){
        if(id == films[i].id){
        res.send(films[i])
    }
    }
    res.send("No movie exsits with this id")
        
})
// v1/getUser/:id
// v2/getUser
// const user ={ v1 : "1" }
// router.get('/getUser',function(req,res){
//     let user = req.param.user
//     res.send('user')
// }) 
// router.get('/getUserId:id',function(req,res){
//     let id = req.param.id
//     res.send(`userid-${id}`)
// })


module.exports = router;