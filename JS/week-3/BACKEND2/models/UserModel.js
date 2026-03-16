import { Schema,model } from "mongoose";
//Create User Schema(username,password,email,age)  ==> defines the structure of documents
const userSchema = new Schema({
    //structure of User resource
    username:{
        type:String,
        required:[true,"Username is requires"],
        minLength:[4,"Min length of username is 4 chars"],
        maxLength:[6,"Username size exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,"Password Required"]
    },
    email:{
        type:String,
        required:[true,"email Required"],
        unique:[true,"email already existed"]
    },
    age:{
        type:Number
    }

},{
    versionKey:false,
    timestamps:true,
})

//Generate UserModel ==>  creates object based on that schema 
export const UserModel = model("user",userSchema)  //"user" -> creates users collection