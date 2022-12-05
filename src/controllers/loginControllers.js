const { authenticateLogin } = require('../services/loginService');

const authenticateLoginController = async (req, res) => {
  const { email, password } = req.body;
  const { type, message, token } = await authenticateLogin(email, password);

  if (type !== null) {
    return res.status(type).json({ message });
  }

   res.status(200).json({ token });
};

module.exports = {
  authenticateLoginController,
};