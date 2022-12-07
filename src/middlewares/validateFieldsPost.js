module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const isInvalidFields = !title || !content || !categoryIds;

  if (isInvalidFields) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};