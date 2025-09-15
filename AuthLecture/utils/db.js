import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoEB connected Successfully");

    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
}

export default connectDB