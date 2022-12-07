const { getAllById } = require('../services/categoryService');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  const { message: categoryById } = await getAllById();
  const ids = categoryById.map((category) => category.dataValues.id);

  const isInvalidCategory = categoryIds.some((id) => !ids.includes(id));

  if (isInvalidCategory) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};