const express=require("express");


const app=express();



app.get("/todos",(req,res)=>{
    res.send("All todos ");
})
app.listen(4500,()=>{
    console.log("server started on port 4500");
})

