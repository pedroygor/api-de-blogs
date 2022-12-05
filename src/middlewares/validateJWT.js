require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userById } = require('../services/userService');

const secret = process.env.JWT_SECRET || '7WykE@16cXDf';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userById(decoded.payload.userId);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};