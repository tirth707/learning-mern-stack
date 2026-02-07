const express=require("express");
const mongoose = require("mongoose");
const todosRouter=require('./routes/todos.router');

const app=express();
app.use(express.json());

app.use("/todos",todosRouter);


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

