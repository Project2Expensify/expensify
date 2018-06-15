var user = require("../models").User;


// API METHOD - used for ONLY sending data
exports.create = function(req, res){ ///api is prefixed in server.js file
  user.findOrCreate({ 
    where: { user_name: req.body.user_name }, 
    default:{ budget:req.body.budget } 
  }).then(function(data){
    // data - an array containing the user object that was either created or found AND whether or not it was newly created (true/false)
    // data[0] (first item in array) - user object
    // data[1] (second item in array) - true or false
    res.send(data);
  }).catch(function(error) {
    res.send(error.message);
  });
}


// FRONTEND METHOD - used for handling behavior such as redirecting
exports.signup = function(req, res) {
  user.findOrCreate({ 
    where: { user_name: req.body.user_name }, 
    default:{ budget:req.body.budget } 
  }).then(function(data){
    // data - an array containing the user object that was either created or found AND whether or not it was newly created (true/false)
    // data[0] (first item in array) - user object
    // data[1] (second item in array) - true or false
    if (data[1]) {
      res.redirect(`/dashboard/${data[0].user_name}`);
    } else {
      res.redirect(`/dashboard?error=already+exists`);
    }
  }).catch(function(error) {
    res.send(error.message);
  });
}

exports.signIn = function(req, res) {
  user.findOne({ 
    where: { user_name: req.body.user_name }, 
  }).then(function(data){
    
    res.redirect(`/dashboard/${data.user_name}`);

  }).catch(function(error) {
    res.send(error.message);
  });
}

exports.login = function(req, res){ ///api is prefixed in server.js file
  var uName = req.body.user_name;
  console.log("login world!!!!", uName); 
  user.findOne({ where: {user_name: uName} }).then(function(user) {
  	if (user) {
	  	var user = user.dataValues;
	  	console.log(user);
	  	 res.json({user});
	}
	else {
		res.json({error: "User not found."})
	}
  })
}


