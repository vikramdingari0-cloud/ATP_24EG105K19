    // create mini express app (separate route)
import exp from 'express'
export const userApp = exp.Router()
import {hash} from "bcryptjs"
import { UserModel } from '../models/UserModel.js'
import { config } from 'dotenv'

config();
// CREATE new user
userApp.post("/users", async (req, res) => {

    // get new user from request body
    const newUser = req.body
    //hash the password  --> bcrypt.js
    const hashedPassword = await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password = hashedPassword
    // create document
    const newUserDocument = new UserModel(newUser)

    // save document to DB
    await newUserDocument.save()

    // send response
    res.status(201).json({ message: "User Created" })
})
//Read All Users
userApp.get("/users", async (req, res) => {
//read all users fron db
    let users = await UserModel.find()
    
    res.json({
        message: "Users list",
        payload: users
    })

})

//read a user through obj id
userApp.get("/users/:_id",async(req,res)=>{
    const uid=req.params.id
    const userObj=await UserModel.find(uid)
    //findOne({email: emailOfUser  }).populate("cart.product")
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"users",payload:userObj})
})

//update user
userApp.put("/users/:id",async(req,res)=>{
    //get modified user from req
    const modifiedUser = req.body;
    const uid = req.params.id;
    //find user by id
    const updatedUser = await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})

    //send res
    res.status(200).json({message:"User Modified",payload:updatedUser})
})

//use findByID()=>to read documents with object ID

//delete user
userApp.delete("/users/:id", async (req, res) => {
    //get id from req params
    const uid = req.params.id;
    //find & delete user by if
    const deletedUser = await UserModel.findByIdAndDelete(uid);

    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted",payload:deletedUser });

});