const express = require('express');

const loginController = require('./controllers/loginControllers');

const validateFieldsLogin = require('./middlewares/validateFieldsLogin');

// ...

const app = express();

app.use(express.json());

app.post(
  '/login', 
  validateFieldsLogin,
  loginController.authenticateLoginController,
);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
