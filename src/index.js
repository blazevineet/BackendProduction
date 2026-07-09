import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });})
.catch((err) => {
    console.log("DB Connection error",err);   })
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