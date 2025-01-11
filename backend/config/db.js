import mongoose from "mongoose";

 export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://harshatu2002:12345@cluster0.15zum.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB connected"));
}  