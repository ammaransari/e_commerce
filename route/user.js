const routes =require("express").Router();

routes.get('/profile',(req,res)=>{
 res.send("start");
});




module.exports=routes;