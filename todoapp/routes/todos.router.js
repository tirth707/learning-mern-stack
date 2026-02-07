const express=require("express");
const todoRouter=express.Router();
const TodoModel=require('../model/todomodel');

const app=express();
app.use(express.json());


todoRouter.get("/", async (req,res)=>{
    try{
    let todos= await TodoModel.find();
    res.send(todos);

}catch(err){
    res.status(500).send(err.message);

}
})

todoRouter.post("/add", async (req,res)=>{

    try{
        let todo=req.body;
        let newTodo= new TodoModel(todo);
        await newTodo.save();
        res.send("todo added successfully");
    }catch(err){
        res.status(500).send(err.message);

    }



})


todoRouter.delete("/delete/:id", async (req,res)=>{

    try {
        let objId=req.params.id;
        await TodoModel.findByIdAndDelete(objId);
        res.send("todo deleted successfully");


    }catch(err){
        res.status(500).send(err.message);
    }
})


todoRouter.patch("/patch/:id", async (req, res) => {
    try {
        let objectId = req.params.id;
        let todo = await TodoModel.findById(objectId);
        todo.isCompleted = !todo.isCompleted; 
        await todo.save();
        res.send("todo updated successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports=todoRouter;