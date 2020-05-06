const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const setPassword = (value) => {
  return bcrypt.hashSync(value, 10);
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: setPassword
  },
  role: {
    type: String,
    default: 'student',
    enum: ['student', 'tutor']
  },
  token: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
