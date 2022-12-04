const MIN_LENGTH_DISPLAY_NAME = 8;
const MIN_LENGTH_PASSWORD = 6;
const EMAIL_FORMAT = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

module.exports = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  
  const validEmail = email.match(EMAIL_FORMAT);

if (displayName.length < MIN_LENGTH_DISPLAY_NAME) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!validEmail) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  if (password.length < MIN_LENGTH_PASSWORD) {
    return res.status(400).json({
    message: '"password" length must be at least 6 characters long',  
    }); 
  }

  next();
};