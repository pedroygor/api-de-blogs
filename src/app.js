const express = require('express');

const loginController = require('./controllers/loginControllers');
const userController = require('./controllers/userController');

const validateFieldsLogin = require('./middlewares/validateFieldsLogin');
const validateFieldsUser = require('./middlewares/validateFieldsUser');
const validateEmailAready = require('./middlewares/validateEmailAlready');

// ...

const app = express();

app.use(express.json());

app.post(
  '/login', 
  validateFieldsLogin,
  loginController.authenticateLoginController,
);

app.post(
  '/user',
  validateFieldsUser,
  validateEmailAready,
  userController.createUserController,
);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
