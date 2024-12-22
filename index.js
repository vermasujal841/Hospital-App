const express=require("express");

const app=express();
const port=3000;

//app.get("health-checkup",...multiple function here basically the last function did not have next attribute)

//in post gerally we send data through body 
//in get we gerally we send data through params and query
app.use(express.json());//it is the middle ware that does the validation check for the element that is coming through req.body
//app.use(authMiddlewhere); we can also use USE fucntion of express if we want to use the middleware before every function below

const z = require("zod")//ZOD--> it is use for input validation 
const schema = z.array(z.number()) //here we are validating input that is the array of number or not 
// {
//     email:string,
//     password:atleat 8 char,
//     country:"IN" or "US"
// }
// const schema = Zod.object({
//     email:Zod.string(),
//     password:Zod.string(),
//     country:z.literal("IN").or(z.literal("US"))
// })


app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    const response=schema.safeParse(kidneys)
    if(!response.success){
        res.send({ response});
    }
    else{
        res.send("number of  "+kidneyLength+"kidneys");
    }
    
    
})





// gloabal catches --> if some thing went wrong in the above post or get request then we can define the global catches
app.use(function(err,req,res,next){ // also known as error handeling middleware express recognises it as an error-handeling middleware because of the four argument
    res.json({
        msg:"Sorry Something is up with the server"
    })
})


app.listen(port,()=>{ 
    console.log(` App is listning on the port ${port}`)
})