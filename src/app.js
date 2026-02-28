import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express()

// app.use(cors({origin: process.env.CORS_ORIGIN,Credential : true}))
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true  // ❌ You wrote "Credential" (wrong spelling + casing)
}))
app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended : true, limit : "20kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// Routes
import UserRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", UserRouter)



export default app;

