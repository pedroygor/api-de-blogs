const { createToken } = require('../auth/createToken');
const { User } = require('../models');

const authenticateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user || user.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
  
  const token = createToken({ payload: { userId: user.id } });

  return { type: null, message: user, token };
};

module.exports = {
  authenticateLogin,
};