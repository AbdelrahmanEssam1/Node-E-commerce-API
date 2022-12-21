var mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
    user_id: String,
    product_id: String,
    rate: Number
  }, {timestamps: true});
  
module.exports = mongoose.model('Rate', rateSchema);