const { createUser, getAll, userById } = require('../services/userService');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message, token } = await createUser(displayName, email, password, image);
  if (type) {
    return res.status(400).json({ message });
  }

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { message } = await getAll();

  res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  res.status(200).json(message);
};

module.exports = { createUserController, getAllUsers, getUserById };