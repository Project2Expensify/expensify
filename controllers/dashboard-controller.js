var expenses = require("../models").Expense
var categories = require("../models").Category
var users = require("../models").User



exports.userDashboard = function(req, res) {
  const userId = req.query.user_id;
  let hbsObj = {};
  console.log("User id: " + userId); 
  users.findOne({ where: { id: userId } }).then(function(user) {
    console.log(user.dataValues)
    hbsObj = {
      user: user.dataValues
    };

    res.render("userDashboard", hbsObj);
  })

};

exports.showForm = function(req, res) {
  console.log("showing form...");
  const userId = req.query.user_id;
  
  users.findOne({ where: { id: userId } }).then(function(user) {
    console.log(user.dataValues)
    var hbsObj = {
      userName: user.dataValues.user_name,
      userId: user.dataValues.id
    };


    res.render("formInput", hbsObj);
  })

}

exports.createExpense = function(req, res) {
  console.log("create expense...");
  expenses.create(req.body).then(function(data) {
    console.log("here abc")
    console.log(data);
  })


}

exports.showExpenses = function(req, res) {

// this is being used to populate expense table on forminput.handlebars. 
exports.showExpenses = function(req,res){

  const allExpenses = expenses.findAll();
  const allCategories = categories.findAll();

  console.log(allCategories)

  const promise = Promise.all([allExpenses, allCategories]); // resolve findAll promises at the time

  promise.then(function(response) {
    const handlebarsObj = { expenses: response[0], categories: response[1] }

    res.render("index", handlebarsObj);

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
      res.render("../views/dashboard", handlebarsObj);
    });
  }); 
}


    console.log("handlebar object:" + handlebarsObj)
    res.render("forminput", handlebarsObj)
  };


// exports.showExpenses = function(req, res) {


//   const allExpenses = expenses.findAll();
//   const allCategories = categories.findAll();

//   const promise = Promise.all([allExpenses, allCategories]); // resolve findAll promises at the time

//   promise.then(function(response) {
//     const handlebarsObj = { expenses: response[0], categories: response[1] }
//     res.render("index", handlebarsObj)
//   })


//   console.log("showing expenses for user: ");
//   console.log(req.query.user_id);
//   const userExpenses = expenses.findOne({where: {id: req.query.user_id}});
//   const userCategories = categories.findOne({where: {id: req.query.user_id}});
//   const user = users.findOne({where: {id: req.query.user_id}});

//   const promise = Promise.all([userExpenses, userCategories, user]); // resolve findAll promises at the time

//   promise.then(function(response) {
//     const handlebarsObj = { expenses: response[0], 
//     						categories: response[1], 
//     						users: response[2] }
//     res.render("../views/dashboard", handlebarsObj)
//   });
  
// };