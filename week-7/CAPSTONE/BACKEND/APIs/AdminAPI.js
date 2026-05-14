import express from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const adminApp = express.Router();

/* ================= GET ALL USERS (USER + AUTHOR) ================= */
adminApp.get(
  "/users",
  verifyToken("ADMIN"),
  async (req, res) => {
    try {
      const users = await UserModel.find(
        { role: { $in: ["USER", "AUTHOR"] } },
        "-password"
      ).lean();

      res.status(200).json({
        success: true,
        payload: users,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ================= BLOCK / UNBLOCK USER ================= */
adminApp.patch(
  "/users/:id/status",
  verifyToken("ADMIN"),
  async (req, res) => {
    try {
      const userId = req.params.id;
      const { isUserActive } = req.body;

      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      user.isUserActive = isUserActive;
      await user.save();

      res.status(200).json({
        success: true,
        message: "User status updated",
        payload: user,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ================= GET ALL ARTICLES (SYSTEM VIEW) ================= */
adminApp.get(
  "/articles",
  verifyToken("ADMIN"),
  async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const articles = await ArticleModel.find()
        .populate("author", "firstName lastName email")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      const total = await ArticleModel.countDocuments();

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

/* ================= DELETE ARTICLE (ADMIN OVERRIDE) ================= */
adminApp.delete(
  "/articles/:id",
  verifyToken("ADMIN"),
  async (req, res) => {
    try {
      const articleId = req.params.id;

      const article = await ArticleModel.findByIdAndDelete(articleId);

      if (!article) {
        return res.status(404).json({
          success: false,
          message: "Article not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Article permanently deleted",
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* ================= PLATFORM STATS (BASIC ANALYTICS FOUNDATION) ================= */
adminApp.get(
  "/stats",
  verifyToken("ADMIN"),
  async (req, res) => {
    try {
      const totalUsers = await UserModel.countDocuments();
      const totalAuthors = await UserModel.countDocuments({ role: "AUTHOR" });
      const totalArticles = await ArticleModel.countDocuments();
      const activeArticles = await ArticleModel.countDocuments({
        isArticleActive: true,
      });

      res.status(200).json({
        success: true,
        payload: {
          totalUsers,
          totalAuthors,
          totalArticles,
          activeArticles,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);