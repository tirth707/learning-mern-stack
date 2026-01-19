// const mongoose = require('mongoose');

// const uri = "mongodb://127.0.0.1:27017/myDatabase";

// mongoose.connect(uri)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Connection error:", err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   adds: String
// });

// const User = mongoose.model('User', userSchema);

// const run = async () => {
//   try {
//     const newUser = new User({
//       name: 'amit',
//       age: 2,
//       adds: 'guj'
//     });

//     const savedUser = await newUser.save();
//     console.log("Document Saved:", savedUser);
//   } catch (error) {
//     console.error("Error saving document:", error);
//   }
// };

// run();

const fs = require('fs');
const express = require("express");
const timeLogger = require("./middleware/timelogger");
const requestLogger = require("./middleware/requestlogger");

const stundetRouter=require("./routes/studentRouter");
const teacherRouter=require("./routes/teacherRouter");
const app = express();

app.use(express.json());


//MIDDLEWARE

app.use(express.json());
app.use(timeLogger);
app.use(requestLogger);


//ROUTES
app.use("/teachers",teacherRouter);
app.use("/students",stundetRouter);

// app.use((req,res,next)=>{
//     let message=req.method+" is made on url "+req.url+" at "+new Date();;
//     fs.appendFileSync("./logs.txt",message+"\n");
//     fs.appendFileSync("./log.txt","\n");
//     // console.log(message);
//     next();
// })




// app.use((req,res,next)=>{
//     console.log("INSIDE MIDDLEWARE");
//     // if("auth"=="auth"){
//         next();
//     // }else{
//         res.send("Login first");
//     // }
// });




// app.get("/students", (req, res) => {
//     let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
//     let parse_data = JSON.parse(data);
//     res.send(parse_data.students);
// });

// app.get("/teachers", (req, res) => {
//     let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
//     let parse_data = JSON.parse(data);
//     res.send(parse_data.teachers);
// });

// app.post("/students/add", (req, res) => {
//     let student = req.body;
//     let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
//     let parse_data = JSON.parse(data);
    
//     parse_data.students.push(student);
    
//     fs.writeFileSync("./data.json", JSON.stringify(parse_data, null, 2));
//     console.log(student);

//     res.send("student added successfully");
// });


// app.post("/teachers/add", (req, res) => {
//     let teachers = req.body;
//     let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
//     let parse_data = JSON.parse(data);
    
//     parse_data.teachers.push(teachers);
    
//     fs.writeFileSync("./data.json", JSON.stringify(parse_data, null, 2));
//     console.log(teachers);

//     res.send("teacher added successfully");
// });


app.listen(6500, () => {
    console.log("server is running on port 6500");
});