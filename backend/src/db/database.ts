import dotenv from "dotenv";
dotenv.config(); // makes env vars available on process.env
import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
