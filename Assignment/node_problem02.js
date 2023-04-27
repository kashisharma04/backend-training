app.post('/postReq',function(req,res) {
    const player =[{
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
    let arr= {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    }
    let ele= req.body.player
    arr.push(ele)
    // player.push(arr)

    res.send(  { data: player, status: true}  )
})

app.listen(process.env.PORT || 4500, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4500))
});