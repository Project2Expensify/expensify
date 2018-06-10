const router = require("express").Router();


// Import the models to use their database functions.
var category = require("../models").Category;
var expense = require("../models").Expense;
var userController = require("../controllers/user-controller")


// create/save a new user
router.post("/users", userController.create) 

// in the future update this route to be a protected route so user cant change categories
router.post("/categories", function(req, res){ // /api is prefixed in server.js file
  category.create({ name: "Food" }).then(function(cat) {
    console.log(cat);
    res.send(cat)
  });
})

// create/send back expense that user created
router.post("/expenses", function(req, res){ // /api is prefixed in server.js file
  expense.create(req.body).then(function(exp){
    res.json({exp})
  }).catch(function(err) {
    res.json({error: true, message: err.message})
  })
})


// this route is for front end to call expense api. NOTE: update to find specific user's expenses  
router.get("/expenses", function(req, res){
  expense.findAll().then(function(expenses){
    res.send(expenses) //sends an array of expenses
  })
})

// DELETE route for deleting expense
router.delete("/expenses/:id", function(req, res){
  expense.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbExpensify){
    res.json(dbExpensify)
  })
})


// PUT route for updating expense
router.put("/api/expenses", function(req, res) {
  expense.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbExpensify) {
      res.json(dbExpensify);
    });
});



module.exports = router;