var user = require("../models").User;


exports.create = function(req, res){ ///api is prefixed in server.js file
  user.create(req.body).then(function(user){
    res.json({user})
  })
}

