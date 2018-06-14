const router = require("express").Router();
const dashboardContoller = require("../controllers/dashboard-controller.js");
const userController = require("../controllers/user-controller.js");


router.post("/register", userController.signup);
router.post("/signin", userController.signIn);
router.get("/dashboard", dashboardContoller.userDashboard);
router.get("/dashboard/:username", dashboardContoller.userDashboard);



module.exports = router;