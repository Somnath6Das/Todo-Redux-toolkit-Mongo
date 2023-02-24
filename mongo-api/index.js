import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models/user.js";
import { Todo } from "./models/todo.js";
import {requireLogin} from "./controllers/RequireLogin.js";
const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to MongoDB");
});

app.use(express.json());

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(422).json({ error: "Please add all the fields" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(422).json({ error: "User already exist with same email!" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        // save to mongodb
        await new User({ email, password: hashedPassword }).save();
        res.status(200).json({ message: "Signup success! Login now." })
    } catch (err) {
        console.log(err);
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(422).json({ error: "Please add all the fields" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User does not exist with same email!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            res.status(201).json({ token });
        } else {
            return res.status(401).json({ error: "User email and password does not match!" });
        }
    } catch (err) {
        console.log(err);
    }
});



app.post('/createtodo', requireLogin, async (req, res) => {
   
  const data = await new Todo({
        todo: req.body.todo,
        todoBy: req.user
    }).save();
    res.status(201).json({message: data})
});


// find todo as per user id.
app.get('/gettodos',requireLogin, async (req, res)=>{
    const data = await Todo.find({todoBy: req.user});
    res.status(200).json({message: data})
});

app.delete('/remove/:id', requireLogin, async(req, res) =>{
  const removeTodo = await Todo.findOneAndRemove({_id: req.params.id});
  res.status(200).json({message: removeTodo})
})

if(process.env.NODE_ENV == 'production'){
    const path = require('path');
    app.get('/', (req, res)=>{
        app.use(express.static(__dirname,'react-ui', 'build'))
        res.sendFile(path.resolve(__dirname,'react-ui', 'build','index.html'))
    })
}


app.listen(8800, () => {
    console.log("Backend server listen port: 8800");
});