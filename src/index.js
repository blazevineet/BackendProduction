import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: "./.env"
});

const app = express();
connectDB();
// import mongoose from "mongoose";
// import { db_name } from "./constants.js";
// import express from "express";
// const app = express();
// (async () => {
//     try{
//       await  moongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
//       app.on("error", (err) => {
        
//         console.log(err);
//         throw err;
//       });
//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })}
//     catch(err){
//         console.log(err);
//     }
// })()