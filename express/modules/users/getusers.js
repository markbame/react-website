var User = require("../../schema/users").users;
exports.getUsers = (req, res, next) => {
  User.find({}, function(err, docs) {
      if (!err){
          res.send(docs)
          process.exit();
      } else {throw err;}
  });
}
