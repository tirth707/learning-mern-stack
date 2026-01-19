// const mongoose = require('mongoose');

// // Use the same URI as before
// const uri = "mongodb://127.0.0.1:27017/myDatabase"; 

// mongoose.connect(uri)
//   .then(() => console.log("Connected"))
//   .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   adds: String
// });

// const User = mongoose.model('User', userSchema);

// const updateUser = async () => {
//   try {
//     // 1. Filter: Find the user named 'amit'
//     // 2. Update: Set the new age to 21
//     // { new: true } means "return the updated document, not the old one"
//     const updatedUser = await User.findOneAndUpdate(
//       { name: 'amit' }, 
//       { age: 21 },      
//       { new: true }     
//     );

//     console.log("OLD DATA: age was 2");
//     console.log("NEW DATA:", updatedUser);

//     mongoose.connection.close();
//   } catch (error) {
//     console.log(error);
//   }
// };

// updateUser();



// let sum=require('./sample');
// console.log(sum(5,10));


// let mul=require('./sample');
// console.log(mul(10,5));

// let sub=require('./sample');
// console.log(sub(10,5));

// let {sum,mul,sub}=require('./sample');
// console.log(sub(10,5));
// const express=require("express");

// const app=express();
// app.get("/students",(req,res)=>{
//     // res.send("<h1> hello studnets </h1>");
//     let data=FileSystem.readFileSync("./data.json",{encoding:"utf-8"});
//     res.send(data);
// })


// app.listen(6500,()=>{
//     console.log("server is running on port 6500");
// })


