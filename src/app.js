const express = require('express');

const validateFieldsLogin = require('./middlewares/validateFieldsLogin');
const validateFieldsUser = require('./middlewares/validateFieldsUser');
const validateEmailAready = require('./middlewares/validateEmailAlready');
const validateJWT = require('./middlewares/validateJWT');
const validateName = require('./middlewares/validateName');
const validateFieldPost = require('./middlewares/validateFieldsPost');
const validateCategoryAlready = require('./middlewares/validateCategoryAlready');

const { createCategoryController, getAllCategories } = require('./controllers/categoryController');
const { createPostController, getAllPosts } = require('./controllers/blogPostController');
const loginController = require('./controllers/loginControllers');
const userController = require('./controllers/userController');

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

app.get(
  '/user',
  validateJWT, 
  userController.getAllUsers,
);

app.get(
  '/user/:id',
  validateJWT, 
  userController.getUserById,
);

app.post(
  '/categories',
  validateJWT,
  validateName,
  createCategoryController,
);

app.get(
  '/categories',
  validateJWT,
  getAllCategories,
);

app.post(
  '/post',
  validateJWT,
  validateFieldPost,
  validateCategoryAlready,
  createPostController,
);

app.get(
  '/post',
  validateJWT,
  getAllPosts,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
