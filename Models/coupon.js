var mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code: String,
    value: Number,
    min_order: Number,
    max_order: Number,
    percentage: Boolean,
    expire: Date,
}, {timestamps: true});
  
module.exports = mongoose.model('Coupon', couponSchema);