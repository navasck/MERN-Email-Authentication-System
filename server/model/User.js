
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  optExpires: { type: Date },
});

const User = mongoose.model('User', userSchema);

module.exports = User

// module.exports = mongoose.model('User', userSchema);
