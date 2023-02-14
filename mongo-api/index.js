import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { User } from "./models/user.js"

const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to MongoDB")
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
            return res.status(422).json({ error: "User already exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        // save to mongodb
        await new User({ email, password: hashedPassword }).save();
        res.status(200).json({ message: "Signup success! Login now." })
    } catch (err) {
        console.log(err);
    }
});



app.listen(8800, () => {
    console.log("Backend server listen port: 8800");
})