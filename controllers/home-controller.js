exports.showHomePage = function(req, res) {
  const handlebarsObj = {
    greeting: "Hello from handlebars"
  };

  res.render("index", handlebarsObj);
};