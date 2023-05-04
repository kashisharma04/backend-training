const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default : mongoose}=require('mongoose');

const app = express();
// app.use(middlewareOne)
   
const middlewareOne = function (req, res , next){
        // const date = new Date()
        // const currentTime = date.toString()
        const timestamp = new Date().toISOString();
        const ip = req.ip 
        const url = req.originalUrl;
        console.log(` ${timestamp}, ${ip}, ${url}`)
        next()
    }
app.use(middlewareOne)
   

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://kashisharma:1U3EnCZfQuitxgNI@cluster0.s9hkgej.mongodb.net/Kashi_ref-pop()?retryWrites=true&w=majority',
{ useNewUrlParser : true }
)
.then( ()=> console.log(" MongoDb is Connected"))
.catch( err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 2200, function() {
    console.log('Express app running on port ' + (process.env.PORT || 2200))
});
