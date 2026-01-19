const mongoose = require('mongoose');
async function connect()

{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/");
       console.log("conected to db");
       studentModel.insertMany([{name:"Tirth",city:"Vadodara",age:21}]);
       console.log("tirth added to db");

    }catch(err){
        console.log(" error in connection to db ");
    }
    

}
//schema
let studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String
});
//model
let studentModel=mongoose.model("students",studentSchema);

connect();
module.exports=connect;