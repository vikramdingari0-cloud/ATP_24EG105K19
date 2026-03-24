import express from "express"
import { UserModel } from "../models/UserModel.js"
import { hash, compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "dotenv"

config()
export const commonApp = express.Router()

// REGISTER
commonApp.post("/users", async (req,res)=>{
  try {
    const newUser = req.body

    if(newUser.password.length < 6){
      return res.status(400).json({message:"Password too short"})
    }

    const existingUser = await UserModel.findOne({email:newUser.email})
    if(existingUser){
      return res.status(409).json({message:"User already exists"})
    }

    newUser.password = await hash(newUser.password, 10)

    await new UserModel(newUser).save()

    res.status(201).json({message:"User created"})
  } catch(err){
    res.status(500).json({message:err.message})
  }
})

// LOGIN
commonApp.post("/login", async (req,res)=>{
  try {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    if(!user){
      return res.status(404).json({message:"User not found"})
    }

    const status = await compare(password, user.password)
    if(!status){
      return res.status(401).json({message:"Invalid password"})
    }

    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    )

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax"
    })

    let userObj = user.toObject()
    delete userObj.password

    res.json({message:"Login success", payload:userObj})

  } catch(err){
    res.status(500).json({message:err.message})
  }
})

// LOGOUT
commonApp.get("/logout",(req,res)=>{
  res.clearCookie("token")
  res.json({message:"Logged out"})
})