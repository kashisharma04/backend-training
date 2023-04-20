function printDate(){
    const d =new Date()
    console.log("todays date:- ", d.getDate())
}
function printMonth(){
    const d =new Date()
    console.log("Present month:- ", d.getMonth())
}
function getBatchInfo(){
    const d =new Date('April 19, 2023')
    const batch="technitium ", week=Math.ceil(d.getDate()/7), Day =d.getDay()
    console.log(batch, ' ','W', week,'D',Day,'the topic for today is Nodejs module system' )

}
module.exports ={printDate,printMonth,getBatchInfo}