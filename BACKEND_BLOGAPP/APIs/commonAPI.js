import exp from "express"
import { UserModel } from "../models/UserModel.js"
import { hash, compare } from "bcryptjs"
import { config } from "dotenv"
import jwt from "jsonwebtoken"
const {sign} = jwt
export const commonApp = exp.Router()
config()

// REGISTER USER
commonApp.post("/users", async (req,res)=>{
    const allowedRoles = ["USER","AUTHOR"]
    const newUser = req.body
    // role validation
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"Invalid role"})
    }
    // check if email already exists
    const existingUser = await UserModel.findOne({email:newUser.email})
    if(existingUser){
        return res.status(409).json({message:"User already exists"})
    }
    // hash password
    newUser.password = await hash(newUser.password,12)
    const newUserDoc = new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"User Created"})
})

 
// LOGIN
commonApp.post("/login", async (req,res)=>{
//get user cred obj
    const userCred = req.body
//find user by email
    const user = await UserModel.findOne({email:userCred.email})

    if(!user){
        return res.status(404).json({message:"User not found"})
    }

    const status = await compare(userCred.password,user.password)

    if(!status){
        return res.status(401).json({message:"Invalid password"})
    }
    //creat jwt
    const signedToken = sign(
  { email: user.email, role: user.role },
  process.env.SECRET_KEY,
  { expiresIn: "1d" }
)
    //set token to cookie header as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //remove password from user document
    let userObj = user.toObject()
  delete userObj.password

  res.status(200).json({
    message: "login success",
    payload: userObj
  })
})


// LOGOUT
commonApp.get("/logout",(req,res)=>{
    res.clearCookie("token", {
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.json({message:"User logged out"})
})