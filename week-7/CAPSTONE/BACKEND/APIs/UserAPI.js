import express from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const userApp = express.Router();

/* ================= GET ALL ACTIVE ARTICLES (PUBLIC FEED) ================= */
userApp.get(
  "/articles",
  verifyToken("USER"),
  async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const articles = await ArticleModel.find(
        { isArticleActive: true }
      )
        .populate("author", "firstName lastName profileImageUrl")
        .select("title category content author createdAt comments")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      const total = await ArticleModel.countDocuments({
        isArticleActive: true,
      });

      res.status(200).json({
        success: true,
        payload: articles,
        pagination: {
          total,
          page,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ================= GET SINGLE ARTICLE ================= */
userApp.get(
  "/articles/:id",
  verifyToken("USER"),
  async (req, res) => {
    try {
      const article = await ArticleModel.findOne({
        _id: req.params.id,
        isArticleActive: true,
      })
        .populate("author", "firstName lastName profileImageUrl")
        .populate("comments.user", "firstName lastName profileImageUrl")
        .lean();

      if (!article) {
        return res.status(404).json({
          success: false,
          message: "Article not found",
        });
      }

      res.status(200).json({
        success: true,
        payload: article,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ================= ADD COMMENT ================= */
userApp.post(
  "/articles/:id/comments",
  verifyToken("USER"),
  async (req, res) => {
    try {
      const articleId = req.params.id;
      const userId = req.user.id;
      const { comment } = req.body;

      if (!comment) {
        return res.status(400).json({
          success: false,
          message: "Comment is required",
        });
      }

      const article = await ArticleModel.findOne({
        _id: articleId,
        isArticleActive: true,
      });

      if (!article) {
        return res.status(404).json({
          success: false,
          message: "Article not found",
        });
      }

      article.comments.push({
        user: userId,
        comment,
      });

      await article.save();

      res.status(201).json({
        success: true,
        message: "Comment added",
        payload: article,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ================= DELETE COMMENT (OWNER ONLY) ================= */
userApp.delete(
  "/articles/:articleId/comments/:commentId",
  verifyToken("USER"),
  async (req, res) => {
    try {
      const { articleId, commentId } = req.params;
      const userId = req.user.id;

      const article = await ArticleModel.findById(articleId);

      if (!article) {
        return res.status(404).json({
          success: false,
          message: "Article not found",
        });
      }

      const commentIndex = article.comments.findIndex(
        (c) =>
          c._id.toString() === commentId &&
          c.user.toString() === userId
      );

      if (commentIndex === -1) {
        return res.status(403).json({
          success: false,
          message: "Not authorized to delete this comment",
        });
      }

      article.comments.splice(commentIndex, 1);
      await article.save();

      res.status(200).json({
        success: true,
        message: "Comment deleted",
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);