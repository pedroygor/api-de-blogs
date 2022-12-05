const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  if (!newCategory) {
    return { type: 404, message: 'Category not created' };
  }
  return { type: null, message: newCategory };
};

module.exports = { createCategory };