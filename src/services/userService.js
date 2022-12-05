const { createToken } = require('../auth/createToken');
const { User } = require('../models');

const createUser = async (displayName, email, password, image = '') => {
  const { dataValues } = await User.create(
    { displayName, email, password, image },
  );
 
  const { password: _, ...userWithoutPassword } = dataValues;
  const token = createToken(userWithoutPassword);
  return { type: null, message: userWithoutPassword, token };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  
  return { type: null, message: users };
};

const userById = async (userId) => {
  const user = await User.findAll({
    where: {
      id: userId,
    },
    attributes: { exclude: ['password'] },
  });

  if (user.length === 0) {
    return { type: 400, message: 'User does not exist' };
  }

  return { type: null, message: user[0] };
};

module.exports = {
  createUser,
  getAll,
  userById,
};