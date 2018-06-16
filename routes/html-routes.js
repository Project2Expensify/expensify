const router = require("express").Router();
const dashboardContoller = require("../controllers/dashboard-controller.js");
const userController = require("../controllers/user-controller.js");



router.post("/register", userController.signup);
router.post("/signin", userController.signIn);
router.get("/dashboard", dashboardContoller.userDashboard);
// router.get("/dashboard", dashboardContoller.showExpenses);
router.get("/forminput", dashboardContoller.showForm);


// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/loginbudget", function(req, res) {
    res.sendFile(path.join(__dirname, "../expensify/loginbudget.html"));
  });

  app.get("/forminput", function(req, res) {
    res.sendFile(path.join(__dirname, "../expensify/forminput.html"));
  });

  app.get("/frontpage", function(req, res) {
  	res.sendFile(path.join(__dirname, "../expensify/frontpage.html"))
  })

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../expensify/loginbudget.html"));
  });
};

// This one creates a user
router.get("/createuser", function(req, res) {
	var hbsObject = {
		login: false
	};
	res.render("../views/loginbudget", hbsObject);
});

router.get("/loginuser", function(req, res) {
	var hbsObject = {
		login: true
	};
	res.render("../views/loginbudget", hbsObject);
});

router.get("/forminput", function(req, res) {
	res.sendFile(path.join(__dirname, "../forminput.html"));
});

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../frontpage.html"))
});

router.get("/frontpage", function(req, res) {
	res.sendFile(path.join(__dirname, "../frontpage.html"))
});

// If no matching route is found default to home
router.get("*", function(req, res) {
	//res.sendFile(path.join(__dirname, "../loginbudget.html"));
	var hbsObject = {	 
	};

	res.render("../views/loginbudget", hbsObject);
});


module.exports = router;