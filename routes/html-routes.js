const router = require("express").Router();
const dashboardContoller = require("../controllers/dashboard-controller.js")

router.get("/dashboard", dashboardContoller.showExpenses);
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================
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