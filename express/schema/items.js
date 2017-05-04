var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  description: String,
  deal: String,
  price: Number,
  percentoff: Number,
  shipping: { type: String, default: 'free' },
  stock: { type: Number, default: 1 },
  category: { type: Number, default: 0 },
  condition: String,
  location: { type: String, default: '' },
  tags: { type: String, default: '' },
  mainimage: String,
  images: [],
  status: { type: String, default: 'active' },
  username:{
    type: String,
    default: 'markbame'
  },
  comments: [{}],
  likes: [{}],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

exports.items = mongoose.model('Items', itemSchema);
