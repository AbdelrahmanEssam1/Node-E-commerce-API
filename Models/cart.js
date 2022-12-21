var mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: String,
  product_id: String,
  product_name: String,
  product_price: String,
  product_quantity: Number,
}, {timestamps: true});
  
module.exports = mongoose.model('Cart', cartSchema);