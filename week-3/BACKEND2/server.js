//Create express app  
// main express server ==>contains instance of http server
import exp from 'express'
import {connect} from 'mongoose'
import { log } from 'node:console'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import { config } from 'dotenv'

config();  //process.env.PORT, process.env.DB_URL
const app=exp()
//add body parser
app.use(exp.json())
//forward req to UserApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

const port = process.env.PORT || 4000
//connect to DB server
async function connectDB(){
    try{
        await connect(process.env.DB_URL)  //deploy?  replace => Mongo atlas cloud database url
        console.log("DB connection Successful");
        
        //start server
        
        app.listen(4000,()=>console.log("server on port 4000 ..."))
        
        
    }catch (err) {
        console.log("err in DB connection :",err);
        
    } 
}

connectDB()

//error handling middleware
app.use((err,req,res,next)=>{

    console.error(err)

    // validation error
    if(err.name === "ValidationError"){
        return res.status(400).json({
            message:"Validation error",
            error:err.message
        })
    }

    // cast error (invalid Mongo ObjectId)
    if(err.name === "CastError"){
        return res.status(400).json({
            message:"Invalid ID",
            error:err.message
        })
    }

    // default server error
    res.status(500).json({
        message:"Server error",
        error:err.message
    })
})

//TCCIP &  HTTP  RELATIONSHIP

//EVENT LOOP => when a async process taking place

//stack & heap will be created in javascript engine