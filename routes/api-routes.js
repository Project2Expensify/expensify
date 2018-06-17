
const router = require("express").Router();

// Import the models to use their database functions.
var category = require("../models").Category;
var expense = require("../models").Expense;
var userController = require("../controllers/user-controller")
const dashboardContoller = require("../controllers/dashboard-controller");



// create/save a new user

router.post("/create/user", userController.create) ;

router.post("/login/user", userController.login);

router.post("/create/expense", dashboardContoller.createExpense);


// this routes was made for testing 
// in the future update this route to be a protected route so user cant change categories
router.post("/categories", function(req, res){ // /api is prefixed in server.js file
  category.bulkCreate([{name: "food"}, {name: "gas"}, {name: "retail"}, {name: "gifts"}]).then(function(cats) {
    res.send(cats)
  });
})

router.get("/categories", function(req, res){ // /api is prefixed in server.js file
  category.findOne({ where: { id: req.query.id }}).then(function(cat) {
    console.log('cat')
    res.send(cat)
  })
})

// create/send back expense that user created
router.post("/expenses", function(req, res){ // /api is prefixed in server.js file
  console.log('expense', req.body)
  expense.create(req.body).then(function(exp){
    res.send(exp)
  }).catch(function(err) {
    res.json({error: true, message: err.message})
  })
})


// this route is for front end to call expense api. NOTE: update to find specific user's expenses  
router.get("/expenses/:user_id", function(req, res){
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
  }).then(function(expenses){
    res.json(expenses)
  })
})


// PUT route for updating expense
router.put("/expenses/:id", function(req, res) {
  expense.update(req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then(function(expenses) {
      res.json(expenses);
    }).catch(function(error){
      res.send(error.message)
    })
});



module.exports = router;

