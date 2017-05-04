var Items = require("../../schema/items").items;
exports.getItems = (req, res, next) => {
  Items.find({}, function(err, docs) {
      if (!err){
          res.setHeader('Content-Type', 'application/json');
          res.send(docs)
          process.exit();
      } else {
         res.status(400)
         res.send({status:"error"})
      }
      process.exit();
  });
}
