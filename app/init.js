'use strict';
const User = require('./models/user')
const Category = require('./models/category')
const jwt = require('jsonwebtoken')

const init = () => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: process.env.ADMIN_EMAIL }, (err, user) => {
      if (err) throw err;
      if (!user) {
        const admin = new User({
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_PASSWORD,
          role: 'admin'
        });
        const token = jwt.sign({ admin: admin._id }, process.env.JWT_SECRET, {
          expiresIn: "1d"
        });
        admin.token = token
        admin.save((err) => {
          if (err) reject(err);
          resolve()
        })
      }
      else {
        resolve();
      }
    })
    Category.findOne({ name: 'Primary' }, (err, category) => {
      if (err) reject(err);
      if (!category) {
        const category = new Category({
          name: "Primary",
          subjects: []
        });
        category.save((err) => { if (err) reject(err); resolve() })
      } else { resolve() }
    });
    Category.findOne({ name: 'JSS' }, (err, category) => {
      if (err) reject(err);
      if (!category) {
        const category = new Category({
          name: "JSS",
          subjects: []
        });
        category.save((err) => { if (err) reject(err); resolve() })
      } else { resolve() }
    });
    Category.findOne({ name: 'SSS' }, (err, category) => {
      if (err) reject(err);
      if (!category) {
        const category = new Category({
          name: "SSS",
          subjects: []
        });
        category.save((err) => { if (err) reject(err); resolve() })
      } else { resolve() }
    });
  })
}


module.exports = init