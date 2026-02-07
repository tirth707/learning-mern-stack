const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
    title:String,
    isCompleted:Boolean
});
const TodoModel=mongoose.model("todo",todoSchema);
module.exports=TodoModel;
