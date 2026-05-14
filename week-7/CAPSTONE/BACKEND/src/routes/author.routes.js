import express from "express";
import {
  createArticle,
  getMyArticles,
  updateArticle,
  toggleArticle,
} from "../controllers/author.controller.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post("/articles", verifyToken("AUTHOR"), createArticle);
router.get("/articles", verifyToken("AUTHOR"), getMyArticles);
router.put("/articles/:id", verifyToken("AUTHOR"), updateArticle);
router.patch("/articles/:id", verifyToken("AUTHOR"), toggleArticle);

export default router;