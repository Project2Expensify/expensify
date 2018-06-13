'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define('Expense', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id"
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {});
  Expense.associate = function(models) {
    Expense.belongsTo(models.Category, {
      foreignKey: "category_id" // we have manually created a column to be set as the foreign key
    });
    Expense.belongsTo(models.User, {
      foreignKey: "user_id" // we have manually created a column to be set as the foreign key
    })
  };
  return Expense;
};