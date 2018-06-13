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
  }

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../expensify/loginbudget.html"));
  });
};

module.exports = router;