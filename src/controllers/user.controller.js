import asyncHandeler from "../utils/asynchandler.js";

const registeruser=asyncHandeler(async(req,res,next)=>{
    res.status(200).json({message:"register user"})})
export {registeruser}