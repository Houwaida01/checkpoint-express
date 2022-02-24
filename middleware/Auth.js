let day= new Date().getDay() 
let hour= new Date().getHours()
function work(req,res,next){
    if (day>0 && day<6 && hour>8 && hour<17) {
       next()  
    } else {
       res.send("sorrrrrrrrrrrrrrrrrrrrrrrrrry, this app is out of time") 
    }
}
module.exports=work;