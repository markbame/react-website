var User = require("../../schema/users").users;
var bcrypt = require('bcrypt-nodejs');
var activateUser = require("../email/activate").activateUser;
exports.saveUser = (req, res, next) => {
     var newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password)
     });
     res.setHeader('Content-Type', 'application/json');
     User.create(newUser, function (err, small) {
       if (err) {
         res.status(409) //Conflict
         res.send({'status':'error'})
       } else {
         activateUser(req, res, next)
         res.status(201) //Created
         res.send({'status':'ok'})
       }
     });
}
