var categories = require("../models").Category


exports.showExpenses = function(req, res) {
  categories.findAll().then(function(categories){
    const handlebarsObj = {categories: categories}
    res.render("index", handlebarsObj)
  })
}; 