const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const seeder = require("./seeders/20180612211210-our-seed-file");
const app = express();


const db = require("./models");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Prefix all routes within the respected route handler files with the path
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


// If no matching route is found default to home
app.get("*", function(req, res) {
	//res.sendFile(path.join(__dirname, "../loginbudget.html"));
	var hbsObject = {	 
	};

	res.render("../views/loginbudget", hbsObject);
});

const PORT = process.env.PORT || 8080;

db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
  })
});

