import Article from "../models/ArticleModel.js";

/* CREATE ARTICLE */
export const createArticleService = async (authorId, body) => {
  const article = await Article.create({
    author: authorId,
    title: body.title,
    category: body.category,
    content: body.content,
  });

  return {
    success: true,
    message: "Article created",
    payload: article,
  };
};

/* GET OWN ARTICLES (PAGINATED) */
export const getMyArticlesService = async (authorId, query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 5;

  const articles = await Article.find({ author: authorId })
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  const total = await Article.countDocuments({ author: authorId });

  return {
    success: true,
    payload: articles,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit),
    },
  };
};

/* UPDATE ARTICLE */
export const updateArticleService = async (authorId, articleId, body) => {
  const updated = await Article.findOneAndUpdate(
    { _id: articleId, author: authorId },
    { $set: body },
    { new: true }
  );

  if (!updated) {
    return {
      success: false,
      message: "Not found or unauthorized",
    };
  }

  return {
    success: true,
    message: "Updated",
    payload: updated,
  };
};

/* SOFT DELETE */
export const toggleArticleService = async (authorId, articleId, body) => {
  const article = await Article.findOne({
    _id: articleId,
    author: authorId,
  });

  if (!article) {
    return {
      success: false,
      message: "Not found",
    };
  }

  article.isArticleActive = body.isArticleActive;
  await article.save();

  return {
    success: true,
    message: "Status updated",
    payload: article,
  };
};