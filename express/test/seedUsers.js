var User = require("../schema/users").users;
var seedUsers = require("./seed/users").seedUsers;
var bcrypt = require('bcrypt-nodejs');
exports.seedUsers = (req, res, next) => {
    User.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success');
            }
        }
    );
    seedUsers().forEach(function(UserSeed, index) {
         var newUser = new User({
              username: UserSeed.username,
              email: UserSeed.email,
              password: bcrypt.hashSync(UserSeed.password),
              privilege: UserSeed.privilege
         });

         User.create(newUser, function (err, small) {
           if (err) {
             console.log(err)
             res.status(409) //Conflict
             res.send({'status':'error'})
             process.exit()
           }
         });
        if(index === seedUsers().length - 1) {
          console.log('users seeding done')
          res.status(200)
          res.send({'status':'ok'})
        }
    })
}
