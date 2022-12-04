const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || '7WykE@16cXDf';

const config = {
  algorithm: 'HS256',
  expiresIn: '15d',
};

const createToken = (payload) => {
  const newToken = jwt.sign(payload, secret, config);
  return newToken;
};

module.exports = { createToken };