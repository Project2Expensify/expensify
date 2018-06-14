var expenses = require("../models").Expense
var categories = require("../models").Category
var users = require("../models").User


exports.showExpenses = function(req, res) {

  console.log("showing expenses for user: ");
  console.log(req.query.user_id);
  const userExpenses = expenses.findOne({where: {id: req.query.user_id}});
  const userCategories = categories.findOne({where: {id: req.query.user_id}});
  const user = users.findOne({where: {id: req.query.user_id}});

  const promise = Promise.all([userExpenses, userCategories, user]); // resolve findAll promises at the time

  promise.then(function(response) {
    const handlebarsObj = { expenses: response[0], 
    						categories: response[1], 
    						users: response[2] }
    res.render("../views/dashboard", handlebarsObj)
  });
  
}; 


