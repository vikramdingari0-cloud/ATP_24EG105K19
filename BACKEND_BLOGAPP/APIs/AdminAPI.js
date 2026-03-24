import express from "express"
export const adminApp = express.Router()

adminApp.get("/", (req,res)=>{
  res.json({message:"Admin API working"})
})