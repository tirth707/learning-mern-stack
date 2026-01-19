const fs=require('fs');
const express=require("express");

const app=express();

const teacherRouter=express.Router();



teacherRouter.get("/", (req, res) => {
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
    let parse_data = JSON.parse(data);
    res.send(parse_data.teachers);
});


teacherRouter.post("/add", (req, res) => {
    let teachers = req.body;
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
    let parse_data = JSON.parse(data);
    
    parse_data.teachers.push(teachers);
    
    fs.writeFileSync("./data.json", JSON.stringify(parse_data, null, 2));
    console.log(teachers);

    res.send("teacher added successfully");
});


module.exports = teacherRouter;