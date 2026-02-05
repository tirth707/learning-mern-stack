const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
    title:String,
    isCompleted:Boolean
});
const TOdoModel=mongoose.model("todo",todoSchema);
module.exports=TOdoModel;
