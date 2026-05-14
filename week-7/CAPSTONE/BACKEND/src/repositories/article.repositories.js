import Article from "../models/ArticleModel.js";

export const findByAuthor = (authorId) =>
  Article.find({ author: authorId });

export const findByIdAndAuthor = (id, authorId) =>
  Article.findOne({ _id: id, author: authorId });

export const createArticle = (data) =>
  Article.create(data);

export const updateArticle = (id, authorId, data) =>
  Article.findOneAndUpdate(
    { _id: id, author: authorId },
    { $set: data },
    { new: true }
  );