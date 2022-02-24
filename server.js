//importation
const express = require("express");

const path=require("path")


//creation d'instance
const app = express();
const work=require("./middleware/Auth") 
app.use(work)
//express Route
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/accueil.html"))
    
})
app.get("/Contactez-Nous",(req,res)=>{
    res.sendFile(path.join(__dirname+"/contact.html"))
    
})
app.get("/Nos-services",(req,res)=>{
    res.sendFile(path.join(__dirname+"/service.html"))
    
})




// creation of server
const port = 7000;
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`the server is running on port:${port}`);
});
