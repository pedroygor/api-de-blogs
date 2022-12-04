const { createToken } = require('../auth/createToken');
const { User } = require('../models');

const createUser = async (displayName, email, password, image = '') => {
  const { password: _, ...userWithoutPassword } = await User.create(
    { displayName, email, password, image },
  );
  const token = createToken(userWithoutPassword);
  return { type: null, message: userWithoutPassword, token };
};

module.exports = {
  createUser,
};