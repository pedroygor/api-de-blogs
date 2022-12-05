const { createCategory, getAll } = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await createCategory(name);

  if (type) {
    return res.status(type).json(message);
  }

  res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
  const { message } = await getAll();

  res.status(200).json(message);
};

module.exports = { createCategoryController, getAllCategories };