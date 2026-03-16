import exp from "express"
import { ArticleModel } from "../models/ArticleModel.js"
import { UserModel } from "../models/UserModel.js"
import { verifyToken } from "../middlewares/VerifyToken.js"

export const authorApp = exp.Router()

// write article
authorApp.post("/article", verifyToken, async (req,res)=>{

    if(req.user.role !== "AUTHOR"){
        return res.status(403).json({message:"Only Author can publish."})
    }

    const articleObj = req.body

    const author = await UserModel.findOne({email:req.user.email})

    if(!author){
        return res.status(404).json({message:"Author not found"})
    }

    articleObj.author = author._id

    const articleDoc = new ArticleModel(articleObj)

    await articleDoc.save()

    res.status(201).json({message:"Article published successfully"})
})


// read own articles
authorApp.get("/article", verifyToken, async (req,res)=>{
    try{
        if(req.user.role !== "AUTHOR"){
            return res.status(403).json({message:"Only Author can view this"})
        }
        // find logged-in author
        const author = await UserModel.findOne({ email: req.user.email })
        if(!author){
            return res.status(404).json({message:"Author not found"})
        }
        // fetch articles created by this author
        const articles = await ArticleModel.find({ author: author._id })
        res.status(200).json({message: "Author articles fetched",payload: articles})
    }catch(err){
        res.status(500).json({ message: "Server error",error: err.message})
    }
})

//Update articles by author
authorApp.put("/article", verifyToken, async (req,res)=>{

    if(req.user.role !== "AUTHOR"){
        return res.status(403).json({message:"Only Author can update."})
    }

    const articleObj = req.body

    const author = await UserModel.findOne({email:req.user.email})

    if(!author){
        return res.status(404).json({message:"Author not found"})
    }

    articleObj.author = author._id

    const articleDoc = new ArticleModel(articleObj)

    await articleDoc.save()

    res.status(201).json({message:"Article updated successfully"})
})

// authorApp.patch("/article",async(req,res)=>{
//     const authorIdOfToken = req.user?._id
//     const {articleId,isArticleActive} = req.body
//     const articleOfDB = await ArticleModel.findOne({_id: articleId,author:author})
//     if(isArticleActive == articleOfDB)
// })