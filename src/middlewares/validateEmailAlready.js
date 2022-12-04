const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const result = await User.findOne({ where: { email } });

  if (result) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  next();
};