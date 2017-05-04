var Items = require("../../schema/items").items;
exports.getItem = (req, res, next) => {
  Items.find({_id:req.params.itemid}, function(err, docs) {
      if (!err){
          res.setHeader('Content-Type', 'application/json');
          res.send(docs)
      } else {
         res.status(400)
         res.send({status:"error"})
      }
      process.exit();
  });
}
