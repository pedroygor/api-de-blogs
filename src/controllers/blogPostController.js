const { getAll, createPost } = require('../services/blogPostService');

const getAllPosts = async (_req, res) => {
  const { message } = await getAll();

  res.status(200).json(message);
};

const createPostController = async (req, res) => {
  const { userId } = req.header;
  const { title, content, categoryIds } = req.body;
  const { type, message } = await createPost(title, content, categoryIds, userId);

  if (type) {
    return res.status(400).json(message);
  }

  res.status(201).json(message);
};

module.exports = { getAllPosts, createPostController };