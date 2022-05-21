const express = require("express");
const app = express();
const route = require("./route/user");
app.set('view engine','ejs');
app.use('/admin',route);
app.listen(3000,(error)=>{
    if(error){
        throw error;
    }
    console.log("server start on 3000");
});
console.log(app.get('ejs'));

// app.get('/',(req,res)=>{
//        res.render('index');
// });
