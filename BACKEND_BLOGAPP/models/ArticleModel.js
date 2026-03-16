import {Schema,model,Types} from 'mongoose';

const commentSchema = new Schema({
    user:{
        type:Types.ObjectId,
        ref: "user",
        required: [true,"user ID required"]
    },
    comment:{
        type:String
    },
});

const ArticleSchema = new Schema({
    author:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"Author Id is Required"]
    },
    articleId:{
        type:String,
        required:[true,"required"]

    },
    title:{
        type:String,
        required:[true,"title Required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    content:{
        type:String,
        required:[true,"content is required"]
    },
    comments:[commentSchema],
    isArticleActive:{
        type:Boolean,
        default:true,
    }
},{
    versionKey:false,
    timestamps:true,
    strict:"throw",
})

//create article model
export const ArticleModel = model("article",ArticleSchema);