'use strict';
const User = require('./models/user')
const Category = require('./models/category')
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
          resolve(() => {
            return new Promise((resolve, reject) => {
              Category.findOne({ name: 'primary' }, (err, cate) => {
                if (err) reject(err);
                if (!cate) {
                  const admin = new Category({
                    name: "Primary",
                    subjects: []
                  });
                }
              });
              Category.findOne({ name: 'JSS' }, (err, cate) => {
                if (err) reject(err);
                if (!cate) {
                  const admin = new Category({
                    name: "JSS",
                    subjects: []
                  });
                }
              });
              Category.findOne({ name: 'SSS' }, (err, cate) => {
                if (err) reject(err);
                if (!cate) {
                  const admin = new Category({
                    name: "SSS",
                    subjects: []
                  });
                }
              });
            })
          })
        })
      }
      else {
        resolve();
      }
    })
  })
}


module.exports = init