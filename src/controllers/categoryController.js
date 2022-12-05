const { createCategory } = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await createCategory(name);

  if (type) {
    return res.status(type).json(message);
  }

  res.status(201).json(message);
};

module.exports = { createCategoryController };