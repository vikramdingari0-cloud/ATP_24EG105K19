import exp from "express"
import mongoose from "mongoose"
import { config } from "dotenv"

import { userApp } from "./APIs/UserAPI.js"
import { authorApp } from "./APIs/AuthorAPI.js"
import { adminApp } from "./APIs/AdminAPI.js"
import { commonApp } from "./APIs/commonAPI.js"
import cookieParser from "cookie-parser"

config()

const app = exp()
//add cookie parser middleware
app.use(cookieParser())
// middleware
app.use(exp.json())

// routers
app.use("/user-api", userApp)
app.use("/author-api", authorApp)
app.use("/admin-api", adminApp)
app.use("/common-api", commonApp)


// database connection
const connectDB = async () => {
  try {

    await mongoose.connect(process.env.DB_URL)

    console.log("DB Server connected")

    const port = process.env.PORT || 5000

    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })

  } catch (err) {
    console.log("Database connection error:", err)
  }
}

connectDB()


// invalid route handler
app.use((req,res)=>{
  res.status(404).json({
    message:`path ${req.url} is invalid`
  })
})


// global error handler
app.use((err,req,res,next)=>{
  res.status(500).json({
    message:"Server error",
    error:err.message
  })
})