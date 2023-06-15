import mongoose from "mongoose";

export default async function connect(){
    mongoose.connect("mongodb+srv://yash:yash@cluster0.zkgqfrx.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}