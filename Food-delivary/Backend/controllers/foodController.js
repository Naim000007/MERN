import foodModel from "../models/foodModel.js";
import fs from "fs";


//add food item 
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })
    try {
        await food.save()
        res.status(201).json({
            message: "Food added successfully"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something went wrong",
            message: e
        })
    }

}

export { addFood }