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
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  role: {
    type: String,
    default: 'student',
    enum: ['student', 'tutor', 'admin']
  },
  registeredSubjects: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }
  ],
  token: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
