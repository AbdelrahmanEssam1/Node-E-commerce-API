var mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: String,
  products: String,
  Total: Number,
  coupon: String,
  after_discount: Number,
  Satus: Number,
}, {timestamps: true});
  
module.exports = mongoose.model('Order', orderSchema);