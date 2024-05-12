import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mdnaim01910423877:thsjxKIQJfTiTPBH@food-del.ozqg6rb.mongodb.net/?retryWrites=true&w=majority&appName=food-del').then(() => {
        console.log("connected to db");
    })
}