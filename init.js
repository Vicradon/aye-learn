'use strict';
const User = require('./models/user')
const jwt = require('jsonwebtoken')

const init = () => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: process.env.ADMINEMAIL }, (err, user) => {
      if (err) throw err;
      if (!user) {
        const admin = new User({
          email: process.env.ADMINEMAIL,
          password: process.env.ADMINPASSWORD,
          role: 'admin'
        });
        const token = jwt.sign({ admin: admin._id }, process.env.JWT_SECRET, {
          expiresIn: "1d"
        });
        admin.token = token
        admin.save((err) => {
          if (err) reject(err);
          resolve();
        })
      } else {
        resolve();
      }
    })
  })
};
module.exports = init