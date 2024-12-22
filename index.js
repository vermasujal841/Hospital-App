const express=require("express");

const app=express();
const port=3000;


app.get("health-checkup",function(){
    const username=req.headers.username;
    const password=req.headers.password;
    
})

app.listen(port,()=>{
    console.log(`App is listning on the port ${port}`)
})