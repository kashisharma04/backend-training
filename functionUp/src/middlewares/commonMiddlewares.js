
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
// const mid5 = function (req, res , next){
//     const date = new Date()
//     const currentTime = date.toString()
//     const ip = req.ip 
//     const originalIP = req.url
//     consoel.log(`${currentTime} ${ip} ${originalIP}`)
//     next()
// }
// const middlewareTwo= function ( req, res, next) {
//     // console.log("Hi I am a middleware named Mid4")
//         const isFreeAppUser = req.header('isFreeAppUser');
//         if (!isFreeAppUser) {
//           res.status(400).json({ error: 'Missing mandatory header: isFreeAppUser' });
//         } 
//     next()
// }


// module.exports.middlewareTwo=middlewareTwo;
const validHeaders = function(req, res, next) {
    let isFreeAppUser = req.header('isFreeAppUser');
    console.log(isFreeAppUser)
    if (isFreeAppUser==undefined) {
        res.send({ error: `Missing mandatory header: isFreeAppUser` });
      }        
     next()
    
    }
    
module.exports.validHeaders = validHeaders;
    
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
// module.exports.mid5 = mid5
