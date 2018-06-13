const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
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

const PORT = process.env.PORT || 8080;

db.sequelize.sync({force: false}).then(function(){
  app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
  })
});

