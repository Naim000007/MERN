import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//app config

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})