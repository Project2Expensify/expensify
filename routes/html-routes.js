const router = require("express").Router();
const dashboardContoller = require("../controllers/dashboard-controller.js")

router.get("/dashboard", dashboardContoller.showExpenses);



module.exports = router;