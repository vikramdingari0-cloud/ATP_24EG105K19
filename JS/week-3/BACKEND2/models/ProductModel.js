import { Schema,model } from "mongoose";
//Create Product Schema(productID,productName,price,brand)  ==> defines the structure of documents
const productSchema = new Schema({
    //structure of Product resource
    productID:{
        type:Number,
        required:[true,"ProductID is requires"],
    },
    productName:{
        type:String,
        required:[true,"ProductName Required"]
    },
    price:{
        type:Number,
        required:[true,"price Required"],
        min:[10000,"min price 10000"],
        max:[50000,"max price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand required"]
    }

},{
    versionKey:false,
    timestamps:true,
})

//Generate ProductModel ==>  creates object based on that schema 
export const ProductModel = model("product",productSchema)  //"product" -> creates users collection