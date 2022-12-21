var mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: String,
    photo: String,
    email: String,
    password: String,
    token: String,
    role: Number,
}, {timestamps: true} );
  
module.exports = mongoose.model('Admin', adminSchema);