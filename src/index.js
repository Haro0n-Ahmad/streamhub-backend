//require ("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDb from "./db/index.js";

// configure dotenv early so environment variables are available
dotenv.config({ path : "./.env"});

connectDb();

/*
import express from "express";
const app = express();

;(async()=>{
 try {
      await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`)
      app.on("error", (error) => {
        console.log("Error in connection", error)
        throw error
      })

      app.listen(process.env.Port, ()=>{
        console.log(`Server is running on port ${process.env.Port}`)
      })
    
 } catch (error) {
    console.log("Connection not established", error)
    throw error
 }


})()
connectDb();
*/
