import mongoose from "mongoose";

import { db_name } from "../constants.js";
const connectDB = async () => {
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);   
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`); 
    }
    catch (err) {
        console.log(err);
        throw err;
        process.exit(1);
    }       }
    export default connectDB;