'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    budget: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here

  };
  return User;
};