'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define('Expense', {
    description: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {});
  Expense.associate = function(models) {
    Expense.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Expense;
};