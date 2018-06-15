var expenses = require("../models").Expense
var categories = require("../models").Category
var users = require("../models").User



exports.userDashboard = function(req, res) {
  const currentUser = req.params.username;
  const alreadyExists = req.query.error;
  let hbsObj = {};
  console.log(alreadyExists)
  if (alreadyExists) {
    hbsObj = {
      error: 'User already exists.'
    }
    return res.render("loginbudget", hbsObj);
  }

  users.findOne({ where: { user_name: currentUser } }).then(function(user) {
    hbsObj = {
      user: user
    };

    res.render("userDashboard", hbsObj);
  })

};


exports.showExpenses = function(req, res) {


  const allExpenses = expenses.findAll();
  const allCategories = categories.findAll();

  const promise = Promise.all([allExpenses, allCategories]); // resolve findAll promises at the time

  promise.then(function(response) {
    const handlebarsObj = { expenses: response[0], categories: response[1] }
    res.render("index", handlebarsObj)

  
  
};