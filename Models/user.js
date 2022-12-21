var mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: String,
  photo: String,
  email: String,
  password: String,
  token: String,
  banned: Boolean,
  }, {timestamps: true});

module.exports = mongoose.model('User', User);