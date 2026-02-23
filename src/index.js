//require ("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDb from "./db/index.js";

dotenv.config({ path : "./.env"});

 app.on("error", (error) => {
     console.log("Error in connection", error)
     throw error
      })
      
connectDb()
.then(()=>{
  app.listen(process.env.Port || 3000 , ()=>{
    console.log(`Server is running on port ${process.env.Port }`)
  }) 

})
.catch((error)=>{
    console.log("Connection not Establised",error)
})


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
