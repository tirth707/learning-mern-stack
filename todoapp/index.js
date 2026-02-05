const express=require("express");
const mongoose = require("mongoose");
const TodoModel=require('./model/todomodel');



const app=express();






app.get("/todos", async (req,res)=>{
    try{
    let todos= await TodoModel.find();
    res.send(todos);

}catch(err){
    res.status(500).send(err.message);

}
})



app.listen(4500,async ()=>{

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/tododb");
        console.log("connected to database successfully");


    }catch(err){

         console.log ("error in connecting database");
    }


    console.log("server started on port 4500");
})

//MVC - MODEL VIEW CONTROLLER 

