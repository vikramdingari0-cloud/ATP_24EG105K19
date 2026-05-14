import express from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const authorApp = express.Router();

/* ================= CREATE ARTICLE ================= */
authorApp.post(
  "/articles",
  verifyToken("AUTHOR"),
  async (req, res) => {
    try {
      const authorId = req.user.id;

      const { title, category, content } = req.body;

      if (!title || !category || !content) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      const article = new ArticleModel({
        author: authorId,
        title,
        category,
        content,
      });

      await article.save();

      res.status(201).json({
        success: true,
        message: "Article created",
        payload: article,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);

/* ================= GET ARTICLES ================= */
authorApp.get(
  "/articles",
  verifyToken("AUTHOR"),
  async (req, res) => {
    try {
      const authorId = req.user.id;

      const articles = await ArticleModel.find({
        author: authorId,
      }).sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        payload: articles,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);

/* ================= UPDATE ARTICLE ================= */
authorApp.put(
  "/articles/:id",
  verifyToken("AUTHOR"),
  async (req, res) => {
    try {
      const authorId = req.user.id;

      const updatedArticle =
        await ArticleModel.findOneAndUpdate(
          {
            _id: req.params.id,
            author: authorId,
          },
          req.body,
          { new: true }
        );

      if (!updatedArticle) {
        return res.status(404).json({
          success: false,
          message: "Article not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Article updated",
        payload: updatedArticle,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);

/* ================= TOGGLE ARTICLE ================= */
authorApp.patch(
  "/articles/:id",
  verifyToken("AUTHOR"),
  async (req, res) => {
    try {
      const authorId = req.user.id;

      const article =
        await ArticleModel.findOne({
          _id: req.params.id,
          author: authorId,
        });

      if (!article) {
        return res.status(404).json({
          success: false,
          message: "Article not found",
        });
      }

      article.isArticleActive =
        req.body.isArticleActive;

      await article.save();

      res.status(200).json({
        success: true,
        message: "Status updated",
        payload: article,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);