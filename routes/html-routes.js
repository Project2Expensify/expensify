const router = require("express").Router();
const homeController = require("../controllers/home-controller.js")

router.get("/", homeController.showHomePage);


module.exports = router;