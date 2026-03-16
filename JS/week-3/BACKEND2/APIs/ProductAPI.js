// create mini express app (separate route)
import exp from 'express'
export const productApp = exp.Router()
import {hash} from "bcryptjs"
import { ProductModel } from '../models/ProductModel.js'

// CREATE new user
productApp.post("/products", async (req, res) => {

    // get new product from request body
    const newProduct = req.body
    const productDoc = new ProductModel(newProduct)
    await productDoc.save()

    // send response
    res.status(201).json({ message: "Product Created" })
})
//Read All Products
productApp.get("/products", async (req, res) => {
//read all products fron db
    let products = await ProductModel.find()
    
    res.json({
        message: "Products list",
        payload: products
    })

})

//read a product through obj id
// get single product
productApp.get("/products/:productID", async (req,res)=>{
    const pid = req.params.productID

    const productObj = await ProductModel.findOne({productID: pid})

    if(!productObj){
        return res.status(404).json({message:"Product not found"})
    }

    res.status(200).json({message:"Product", payload:productObj})
})


// update product
productApp.put("/products/:productID", async (req,res)=>{
    const pid = req.params.productID
    const modifiedProduct = req.body

    const updatedProduct = await ProductModel.findOneAndUpdate(
        {productID: pid},
        {$set: modifiedProduct},
        {new:true, runValidators:true}
    )

    res.json({message:"Product Modified", payload:updatedProduct})
})


// delete product
productApp.delete("/products/:productID", async (req,res)=>{
    const pid = req.params.productID

    const deletedProduct = await ProductModel.findOneAndDelete({productID: pid})

    res.json({message:"Product deleted", payload:deletedProduct})
})