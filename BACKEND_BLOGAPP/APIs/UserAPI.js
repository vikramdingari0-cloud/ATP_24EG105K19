import express from "express"
export const userApp = express.Router()

userApp.get("/", (req,res)=>{
  res.json({message:"User API working"})
})