const { BlogPost, Category, sequelize, PostCategory, User } = require('../models');

const getAll = async () => {
  const categories = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }, 
],
order: [['id', 'ASC']] });

  return { type: null, message: categories };
};

const getById = async (postId) => {
  try {
    const post = await BlogPost.findOne({ 
      where: { id: postId },
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' }],
    });

    if (!post) {
      return { type: 404, message: 'Post does not exist' };
    }

    return { type: null, message: post };
  } catch (error) {
    return { type: 404, message: error.message };
  }
};

const createPost = async (title, content, categoryIds, userId) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({
        title,
        content,
        userId,
      }, { transaction: t });
      
      categoryIds.map(async (id) => { 
       await PostCategory.create({ postId: post.id, categoryId: id });
      });
  
      return post;
    });
  
    return { type: null, message: result };
  } catch (error) {
    return { type: 400, message: error.message };
  }
};

module.exports = { getAll, createPost, getById };