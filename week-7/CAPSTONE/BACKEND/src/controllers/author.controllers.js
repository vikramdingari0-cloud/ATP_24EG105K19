import {
  createArticleService,
  getMyArticlesService,
  updateArticleService,
  toggleArticleService,
} from "../services/author.service.js";

/* CREATE */
export const createArticle = async (req, res) => {
  const data = await createArticleService(req.user.id, req.body);
  res.status(201).json(data);
};

/* READ */
export const getMyArticles = async (req, res) => {
  const data = await getMyArticlesService(req.user.id, req.query);
  res.status(200).json(data);
};

/* UPDATE */
export const updateArticle = async (req, res) => {
  const data = await updateArticleService(req.user.id, req.params.id, req.body);
  res.status(200).json(data);
};

/* TOGGLE */
export const toggleArticle = async (req, res) => {
  const data = await toggleArticleService(req.user.id, req.params.id, req.body);
  res.status(200).json(data);
};