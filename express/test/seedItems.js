var Item = require("../schema/items").items;
var seedItems = require("./seed/items").seedItems;
exports.seedItems = (req, res, next) => {
    Item.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success');
            }
        }
    );
    seedItems().forEach(function(ItemSeed, index) {
         var newItem = new Item({
              title: ItemSeed.title,
              description: ItemSeed.description,
              deal: ItemSeed.deal,
              price: ItemSeed.price,
              oldprice: ItemSeed.oldprice,
              shipping: ItemSeed.shipping,
              condition: ItemSeed.condition,
              location: ItemSeed.location,
              tags: ItemSeed.tags,
              mainimage: ItemSeed.mainimage,
              images: [],
              username: 'markbame'
         });

         Item.create(newItem, function (err, small) {
           if (err) {
             console.log(err)
             res.status(409) //Conflict
             res.send({'status':'error'})
             process.exit()
           }
         });
        if(index === seedItems().length - 1) {
           console.log('items seeding done')
        }
    })
     next()
}
