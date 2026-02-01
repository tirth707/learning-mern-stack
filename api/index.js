const express = require('express');
const app=express();
const PORT = 5000;

//middleware

app.use=(express.json());

//routes
app.get('/',(req,res)=>{
    res.json({message:"Welcome to my MERN API"});

});

app.listen=(PORT,()=>{
    console.log("server is runinng on http://localhost:${PORT}");
});