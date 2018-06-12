var expenses = require("../models").Expense
var categories = require("../models").Category


exports.showExpenses = function(req, res) {

  const allExpenses = expenses.findAll();
  const allCategories = categories.findAll();

  const promise = Promise.all([allExpenses, allCategories]); // resolve findAll promises at the time

  promise.then(function(response) {
    const handlebarsObj = { expenses: response[0], categories: response[1] }
    res.render("index", handlebarsObj)
  });
  
}; 


