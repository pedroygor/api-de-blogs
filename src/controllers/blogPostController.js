const { getAll, createPost, getById } = require('../services/blogPostService');

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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await getById(id);

  if (type) {
    return res.status(type).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = { getAllPosts, createPostController, getPostById };