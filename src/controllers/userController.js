const { createUser } = require('../services/userService');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message, token } = await createUser(displayName, email, password, image);
  if (type) {
    return res.status(400).json({ message });
  }

  res.status(201).json({ token });
};

module.exports = { createUserController };