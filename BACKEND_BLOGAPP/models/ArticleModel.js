import { Schema, model, Types } from "mongoose"

const commentSchema = new Schema({
  user: { type: Types.ObjectId, ref: "user", required: true },
  comment: String
})

const ArticleSchema = new Schema({
  author: { type: Types.ObjectId, ref: "user", required: true },
  articleId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  comments: [commentSchema],
  isArticleActive: { type: Boolean, default: true }
},{
  timestamps: true,
  versionKey: false
})

export const ArticleModel = model("article", ArticleSchema)