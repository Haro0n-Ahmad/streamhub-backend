import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`)
        console.log(`\n MongoDB connected!! DB HOST ${connectionInstance.connection.host}`)


    } catch (error) {
        console.log("Connection not established", error)
        process.exit(1)
    }
}

export default connectDb;