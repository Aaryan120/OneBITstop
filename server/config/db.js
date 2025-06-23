import mongoose from "mongoose";
require("dotenv").config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("MongoDB Connected Successfully");
        })
        .catch((err) => {
            console.log(err);
        });
        // console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}


export default connectDB;