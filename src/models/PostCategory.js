module.exports = (sequelize, DataTypes) => {
 const PostCategory = sequelize.define('PostCategory', 
 {
  postId: { primaryKey: true, type: DataTypes.INTEGER, foreignKey: true },
  categoryId: { primaryKey: true, type: DataTypes.INTEGER, foreignKey: true },
 }, {
  timestamps: false, 
  tableName: 'posts_categories',
  underscored: true,
});

  PostCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      through: PostCategory,
      as: 'posts',
    });

    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      through: PostCategory,
      as: 'categories',
    });
  };

  return PostCategory;
};