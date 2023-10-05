const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(" mongodb://127.0.0.1:27017/mern-todo",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

 .then(() => console.log("connected to the db"))
 .catch(console.error);

 const Todo = require("./models/todo");

 app.get("./todo", async (req,res) =>{
    const todos = await Todo.find();

    res.json(todos)
 });

 app.get("/todo/new", (req,res) =>{
    const todo = new Todo({
        text:req.body.text
    });
    todo.save();

    res.json(todo);
 } );

 app.delete("/todos/delete:id", async(req,res) =>{
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
    
 })

 app.put("/todo/complete/:id", async (req,res) =>{
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();

    res.json(todo);

 })


 app.listen(3001, () => console.log("Server Running"));
