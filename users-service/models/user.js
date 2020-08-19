'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING(200),
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defualtValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defualtValue: DataTypes.NOW
    },
    imageURL: DataTypes.STRING(200)
  }, {
    tableName: 'userTB'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};