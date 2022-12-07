const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  if (!newCategory) {
    return { type: 404, message: 'Category not created' };
  }
  return { type: null, message: newCategory };
};

const getAll = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

const getAllById = async () => {
  const categoryById = await Category.findAll({ attributes: ['id'] });

  return { type: null, message: categoryById };
};

const getById = async (categoryId) => {
  const category = await Category.findAll({
    where: { id: categoryId },
  });

  return { type: null, message: category };
};

module.exports = { createCategory, getAll, getById, getAllById };