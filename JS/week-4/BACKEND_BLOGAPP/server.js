import express from "express"
import mongoose from "mongoose"
import { config } from "dotenv"
import cookieParser from "cookie-parser"

import { userApp } from "./APIs/UserAPI.js"
import { authorApp } from "./APIs/AuthorAPI.js"
import { adminApp } from "./APIs/AdminAPI.js"
import { commonApp } from "./APIs/commonAPI.js"

config()

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())

// routes
app.use("/user-api", userApp)
app.use("/author-api", authorApp)
app.use("/admin-api", adminApp)
app.use("/common-api", commonApp)

// DB connection
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB connected")

    app.listen(process.env.PORT || 5000, ()=>{
        console.log("Server running...")
    })
})
.catch(err=>console.log(err))

// invalid route
app.use((req,res)=>{
    res.status(404).json({message:`Invalid path ${req.url}`})
})

// global error handler
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Server error", error:err.message})
})