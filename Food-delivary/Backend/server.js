import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection 
connectDB();

// api endpoints
app.use("/api/food", foodRouter)


app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})

//mongodb+srv://mdnaim01910423877:thsjxKIQJfTiTPBH@food-del.ozqg6rb.mongodb.net/?retryWrites=true&w=majority&appName=food-del

// mongoose
//mongodb+srv://mdnaim01910423877:thsjxKIQJfTiTPBH@food-del.ozqg6rb.mongodb.net/?retryWrites=true&w=majority&appName=food-del

