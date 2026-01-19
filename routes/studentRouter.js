const fs = require('fs');
const express=require("express");

const app=express();

const studentRouter=express.Router();

studentRouter.get("/", (req, res) => {
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
    let parse_data = JSON.parse(data);
    res.send(parse_data.students);
});



studentRouter.post("/add", (req, res) => {
    let student = req.body;
    let data = fs.readFileSync("./data.json", { encoding: "utf-8" });
    let parse_data = JSON.parse(data);
    
    parse_data.students.push(student);
    
    fs.writeFileSync("./data.json", JSON.stringify(parse_data, null, 2));
    console.log(student);

    res.send("student added successfully");
});

module.exports = studentRouter;