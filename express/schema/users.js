var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    index: true,
    unique: true
  },
  email:{
    type: String,
    index: true,
    unique: true
  },
  password: { type: String, default: "" },
  image: { type: String, default: "defaultprofile.jpg" },
  privilege: { type: String, default: "unverified" },
  rank:{ type: String, default: "baby" },
  rating:{ type: Number, default: 0 },
  items : [{ type: Schema.Types.ObjectId, ref: 'Items' }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

exports.users = mongoose.model('Users', userSchema);
