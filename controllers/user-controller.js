var user = require("../models").User;


exports.create = function(req, res){ ///api is prefixed in server.js file
  user.create(req.body).then(function(user){
    res.json({user})
  })
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

