import express from "express"
import { ArticleModel } from "../models/ArticleModel.js"
import { UserModel } from "../models/UserModel.js"
import { verifyToken } from "../middlewares/VerifyToken.js"
import { authorizeRoles } from "../middlewares/authorizeRoles.js"

export const authorApp = express.Router()

// CREATE
authorApp.post("/article", verifyToken, authorizeRoles("AUTHOR"), async (req,res)=>{
  try {
    const author = await UserModel.findOne({email:req.user.email})

    const article = new ArticleModel({
      ...req.body,
      author: author._id
    })

    await article.save()

    res.status(201).json({message:"Article created"})
  } catch(err){
    res.status(500).json({message:err.message})
  }
})

// READ
authorApp.get("/article", verifyToken, authorizeRoles("AUTHOR"), async (req,res)=>{
  try {
    const author = await UserModel.findOne({email:req.user.email})

    const articles = await ArticleModel
      .find({ author: author._id, isArticleActive: true })
      .populate("author","firstName email")

    res.json({payload:articles})
  } catch(err){
    res.status(500).json({message:err.message})
  }
})

// UPDATE
authorApp.put("/article", verifyToken, authorizeRoles("AUTHOR"), async (req,res)=>{
  try {
    const { articleId, ...data } = req.body

    const author = await UserModel.findOne({email:req.user.email})

    const updated = await ArticleModel.findOneAndUpdate(
      { articleId, author: author._id },
      data,
      { new: true }
    )

    if(!updated){
      return res.status(404).json({message:"Article not found"})
    }

    res.json({message:"Updated", payload:updated})

  } catch(err){
    res.status(500).json({message:err.message})
  }
})

// DELETE (SOFT DELETE)
authorApp.patch("/article", verifyToken, authorizeRoles("AUTHOR"), async (req,res)=>{
  try {
    const { articleId, isArticleActive } = req.body

    const author = await UserModel.findOne({email:req.user.email})

    const updated = await ArticleModel.findOneAndUpdate(
      { articleId, author: author._id },
      { isArticleActive },
      { new: true }
    )

    res.json({message:"Status updated", payload:updated})

  } catch(err){
    res.status(500).json({message:err.message})
  }
})