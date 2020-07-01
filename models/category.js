const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subjects: {
    type: Array
  },
  "number of subjects": {
    type: Number,
  }
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category