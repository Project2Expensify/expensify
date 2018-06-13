var expenses = require("../models").Expense
var categories = require("../models").Category
var users = require("../models").User


exports.showExpenses = function(req, res) {

  const allExpenses = expenses.findAll();
  const allCategories = categories.findAll();
  const allUsers = users.findAll();

  const promise = Promise.all([allExpenses, allCategories, allUsers]); // resolve findAll promises at the time

  promise.then(function(response) {
    const handlebarsObj = { expenses: response[0], categories: response[1], users: response[2] }
    res.render("loginbudget", handlebarsObj)
  });
  
}; 


