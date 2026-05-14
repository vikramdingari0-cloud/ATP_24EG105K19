import { Schema,model } from "mongoose";
const empSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already registered"],
    },
    mobile:{
        type:Number,
        required:[true,"mobile num is required"],
    },
    designation:{
        type:String,
        required:[true,"designation is required"],
    },
    companyName:{
        type:String,
        required:[true,"company name is required"],
    },

},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
}
);


export const empModel = model("emp",empSchema)